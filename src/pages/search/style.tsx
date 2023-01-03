import styled from "@emotion/styled";
import { easeIn } from "utils/animations";
import { COLORS } from "utils/colors";

export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: space-between;
  align-self: center;
  animation: ${easeIn} 0.7s ease-in-out 0.4s forwards;
  will-change: auto;
  transition: all 0.2s ease-in;
  opacity: 0;

  &:after {
    content: "";
    margin-left: 28rem;
  }

  @media only screen and (max-width: 991px) {
    max-width: 80rem;

    &:after {
      margin-left: 24rem;
    }
  }

  @media only screen and (max-width: 824px) {
    max-width: 60rem;
    &:after {
      margin-left: 28rem;
    }
  }

  @media only screen and (max-width: 651px) {
    &:after {
      margin-left: 22rem;
    }
  }

  @media only screen and (max-width: 648px) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 574px) {
    max-width: 60rem;
  }

  @media only screen and (max-width: 449px) {
    justify-content: center;
    .card {
      margin-bottom: 2rem;
    }
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
