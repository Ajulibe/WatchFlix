import { COLORS } from "utils/colors";
import { FONTS } from "utils/fonts";
import { easeIn } from "utils/animations";
import styled from "@emotion/styled";

export const Card = styled.div`
  width: 28rem;
  height: 34.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: ${COLORS.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.mininalGrey};
  overflow: hidden;
  background-color: ${COLORS.cardBg};
  animation: ${easeIn} 0.3s ease-in;
  will-change: auto;

  &:hover {
    border: 1px solid ${COLORS.cardHover};
    box-shadow: var(#0000, 0 0 #0000), var(#0000, 0 0 #0000), var(#0000);
    cursor: pointer;

    img {
      transform: scale(1.05);
      filter: grayscale(40%);
    }
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
  }
  @media only screen and (max-width: 789px) {
    &:hover {
      border: 1px solid ${COLORS.mininalGrey};
      box-shadow: none;
      img {
        transform: unset;
        filter: unset;
      }
    }
  }

  @media only screen and (max-width: 651px) {
    height: 36.8rem;
  }

  @media only screen and (max-width: 520px) {
    &:hover {
      border: none;
    }
  }

  @media only screen and (max-width: 475px) {
    height: 54.8rem;
  }

  @media only screen and (max-width: 394px) {
    height: 54rem;
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
    transition: all 0.5s ease-in;
    overflow: hidden;
  }

  .no-image {
    font-size: 20px;
    position: absolute;
    font-weight: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .placeholder__image {
    width: 100%;
    height: 100%;

    div {
      background-color: ${COLORS.white200};
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      width: 100%;
      height: 100%;
    }
  }
`;

export const MovieTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  color: ${COLORS.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 13px 13px 13px;
  font-family: ${FONTS.primary};

  .rating {
    background-color: transparent;
    box-shadow: none;
    outline: none;
    width: 20px !important;
    display: flex;
    align-items: center;
  }
`;
