import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const Card = styled.div`
  width: 28rem;
  height: 34.8rem;
  box-sizing: border-box;
  /* box-shadow: 1px 2px 8px 2px ${COLORS.cardShadow}; */
  display: flex;
  flex-direction: column;
  color: ${COLORS.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.mininalGrey};
  overflow: hidden;
  background-color: ${COLORS.cardBg};

  &:hover {
    /* border: 1px solid ${COLORS.mininalGrey}; */
  }

  @media only screen and (max-width: 651px) {
    width: 22rem;
    height: 30.8rem;
  }

  @media only screen and (max-width: 520px) {
    width: 45%;
    height: 26.8rem;

    &:hover {
      border: none;
    }
  }

  @media only screen and (max-width: 430px) {
    width: 28rem;
    height: 34.8rem;
  }
`;
export const CardPreview = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-image {
    font-size: 20px;
    position: absolute;
    font-weight: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MovieTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: ${COLORS.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px 13px 13px;
`;
