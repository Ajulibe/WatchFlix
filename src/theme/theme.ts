import { HTMLChakraProps, ThemingProps, extendTheme } from "@chakra-ui/react";

import { inputStyles } from "./components/inputs";

export default extendTheme(inputStyles);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
