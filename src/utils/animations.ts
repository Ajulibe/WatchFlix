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
