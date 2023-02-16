import { COLORS } from "utils/colors";
import { easeIn } from "utils/animations";
import styled from "@emotion/styled";

export const MovieWrapper = styled.div`
  justify-content: center;
  opacity: 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 28rem));
  animation: ${easeIn} 0.7s ease-in forwards;
  will-change: auto;
  height: 72rem;
  overflow-y: scroll;
  margin-top: 3rem;

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
    grid-template-columns: repeat(auto-fill, 38rem);
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
  overflow-x: scroll;
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

export const Header = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${COLORS.white};
  margin-top: 2rem;
  margin-left: 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  .button {
    font-size: 16px;
    width: 30px;
    font-weight: bold;
    color: ${COLORS.white};
    padding: 10px 60px;
    border-radius: 14px;
    background-color: ${COLORS.primary};
    outline: none;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    align-self: center;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &:hover {
      background-color: ${COLORS.primaryHover};
    }
  }
`;
