/*eslint-disable*/
import {
  CurlyTitle,
  FlexContainer,
  Header,
  HeaderWrapper,
  MovieWrapper,
  Title,
  TitleWrapper
} from "./style";

import { Button } from "@chakra-ui/react";
import { CardWidget } from "components/card";
import { PagesWrapper } from "layout";
import React from "react";
import { Spinner } from "components/spinner";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { useResultsSync } from "hooks/useResultsSync";

const HeaderText = React.memo(() => {
  const history = useHistory();
  const navigateHome = (): void => {
    history.push("/");
  };

  return (
    <TitleWrapper onClick={navigateHome} data-testid="header">
      <CurlyTitle>watch</CurlyTitle>
      <Title>Flix</Title>
    </TitleWrapper>
  );
});

HeaderText.displayName = "HeaderText";

const Movies: React.FC = () => {
  const { moviesData, isLoading } = useResultsSync();
  const recent = moviesData[0]?.recentMovies;
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <Spinner />;
  }

  const handleLogout = async () => oktaAuth.signOut();

  return (
    <PagesWrapper>
      <FlexContainer>
        <HeaderWrapper>
          <HeaderText />
          <Button
            onClick={handleLogout}
            className="button"
            type="submit"
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
          >
            Log out
          </Button>
        </HeaderWrapper>

        <Header>Last Seen Movies</Header>

        <MovieWrapper>
          {/* {movies.length === 0 && !isLoading && isMounted.current ? (
            <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
          ) : null} */}
          {/* {isLoading && <Spinner />} */}

          {/* <Marquee> */}
          {!isLoading &&
            recent?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  onClick={() => {
                    // history.push(`/results/${item.id}`);
                  }}
                />
              );
            })}
          {/* </Marquee> */}
        </MovieWrapper>
        <Header>Recent Movies</Header>
        <MovieWrapper>
          {/* {movies.length === 0 && !isLoading && isMounted.current ? (
            <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
          ) : null} */}
          {/* {isLoading && <Spinner />} */}

          {/* <Marquee> */}
          {!isLoading &&
            recent?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  onClick={() => {
                    // history.push(`/results/${item.id}`);
                  }}
                />
              );
            })}
          {/* </Marquee> */}
        </MovieWrapper>

        <Header>Recommended Movies</Header>
        <MovieWrapper>
          {/* <Marquee> */}
          {!isLoading &&
            recent?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  onClick={() => {
                    // history.push(`/results/${item.id}`);
                  }}
                />
              );
            })}
          {/* </Marquee> */}
        </MovieWrapper>
      </FlexContainer>
    </PagesWrapper>
  );
};

export default Movies;
Movies.displayName = "Movies";
