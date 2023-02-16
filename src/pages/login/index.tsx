/* eslint-disable */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import { Caption, Container, Header, Wrapper } from "./style";
import React, { FC, useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const SignIn: FC = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie] = useCookies(["token"]);
  const history = useHistory();

  const handleClick = (): void => setShow(!show);

  const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        email_address: email,
        password
      });
      const accessToken: string = response.data.token;
      setCookie("token", accessToken, { path: "/" });
      history.push("/v1/default");
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error",
        position: "top-right",
        description: error?.response?.data?.message,
        status: "error",
        duration: 9000,
        isClosable: true
      });
    }
  };

  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFunction(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Flex
          maxW={{ base: "100%", md: "max-content" }}
          w="100%"
          mx={{ base: "auto", lg: "0px" }}
          me="auto"
          justifyContent="center"
          px={{ base: "20px", md: "0px" }}
          flexDirection="column"
        >
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Sign In
            </Heading>
            <Text
              className="sub-text"
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="lg"
            >
              Enter your email and password to sign in!
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
            mb={{ base: "20px", md: "auto" }}
          >
            <Flex align="center" mb="25px"></Flex>
            <form onSubmit={login}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Email<Text className="stars">&nbsp;*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="email"
                  placeholder="mail@simmmple.com"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  onChange={(e) => inputChangeHandler(setEmail, e)}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="500" color={textColor} display="flex">
                  Password<Text className="stars">&nbsp;*</Text>
                </FormLabel>

                <InputGroup size="md">
                  <Input
                    isRequired={true}
                    fontSize="sm"
                    ms={{ base: "0px", md: "4px" }}
                    placeholder="Min. 8 characters"
                    mb="24px"
                    size="lg"
                    type={show ? "text" : "password"}
                    onChange={(e) => inputChangeHandler(setPassword, e)}
                  />

                  <InputRightElement display="flex" alignItems="center" mt="4px">
                    <Icon
                      className="icon"
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                    />
                  </InputRightElement>
                </InputGroup>

                <Flex justifyContent="space-between" align="center" mb="24px">
                  <FormControl display="flex" alignItems="center"></FormControl>
                </Flex>
                <Button
                  type="submit"
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                >
                  Sign In
                </Button>
              </FormControl>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              maxW="100%"
              mt="0px"
            ></Flex>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
