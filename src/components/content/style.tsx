import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: space-between;
  align-self: center;

  &:after {
    content: "";
    margin-left: 28rem;
  }

  @media only screen and (max-width: 991px) {
    max-width: 60rem;
  }

  @media only screen and (max-width: 651px) {
    max-width: 100%;
    justify-content: center;
  }

  @media only screen and (max-width: 430px) {
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
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
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
  font-size: 2rem;
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

export const VideoWrapper = styled.div`
  height: 60vh;
  overflow: hidden;
  margin-top: 6rem;
`;
