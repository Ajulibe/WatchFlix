import styled from "@emotion/styled";
import { easeIn } from "utils/animations";
import { COLORS } from "utils/colors";

export const MovieWrapper = styled.div`
  justify-content: center;
  opacity: 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 28rem));
  animation: ${easeIn} 0.7s ease-in forwards;
  will-change: auto;

  @media only screen and (max-width: 979px) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 27rem));
  }

  @media only screen and (max-width: 946px) {
    grid-template-columns: repeat(auto-fill, 24rem);
  }
  @media only screen and (max-width: 846px) {
    grid-template-columns: repeat(auto-fill, 22rem);
  }

  @media only screen and (max-width: 779px) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 27rem));
  }

  @media only screen and (max-width: 651px) {
    grid-template-columns: repeat(auto-fill, 30rem);
  }

  @media only screen and (max-width: 526px) {
    grid-template-columns: repeat(auto-fill, min(29rem, 40rem));
  }

  @media only screen and (max-width: 508px) {
    grid-template-columns: repeat(auto-fill, min(27rem, 40rem));
  }

  @media only screen and (max-width: 475px) {
    grid-template-columns: repeat(auto-fill, 40rem);
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.7rem;
  min-height: 100vh;
  padding-bottom: 7rem;
  animation: ${easeIn} 0.4s ease-in-out forwards;
  will-change: auto;
  opacity: 0;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  color: ${COLORS.white};
  background-color: ${COLORS.cardBg};
  padding: 0 8px;
  @media only screen and (max-width: 991px) {
    align-self: center;
  }
`;

export const CurlyTitle = styled.h1`
  font-family: "Spirax", cursive;
  font-weight: 800;
  font-size: 4rem;
  margin-right: 4px;
  color: ${COLORS.primary};
  @media only screen and (max-width: 991px) {
    align-self: center;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Empty = styled.div`
  font-size: 20px;
  color: ${COLORS.white};
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
