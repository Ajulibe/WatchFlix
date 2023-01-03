import { keyframes } from "@emotion/react";

export const easeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const grow = keyframes`
   to {
      transform: translateY(0px);
      opacity: 1;
    }
`;

export const move = keyframes`
  0% {background-position: bottom left;}
  25% {background-position: top right;}
  50%{background-position: top left;}
  100% {background-position: bottom right;}
`;
