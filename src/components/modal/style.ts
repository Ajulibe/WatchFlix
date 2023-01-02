import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const Modal = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.backdrop};
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .content-container {
    width: 58.3rem;
    height: 47.4rem;
    background: ${COLORS.white};
    padding: 20px 23px 28px 27px;
    box-sizing: border-box;
    animation: zoomOut 0.2s ease-in;

    @media only screen and (max-width: 616px) {
      width: 95%;
    }

    @media only screen and (max-width: 530px) {
      height: auto;
    }
  }

  @keyframes zoomOut {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ModalTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${COLORS.black};
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    max-width: 90%;
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 530px) {
    flex-direction: column;
  }
`;

export const ModalImage = styled.div`
  width: 26.6rem;
  height: 38.9rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-image {
    font-size: 20px;
    font-weight: 600;
  }

  @media only screen and (max-width: 616px) {
    width: 50%;
    height: 38.9rem;
  }

  @media only screen and (max-width: 530px) {
    width: 100%;
    height: 14.9rem;
    overflow: hidden;
  }
`;

export const ModalInfo = styled.div`
  width: 24.1rem;
  overflow: hidden;
  height: 38.9rem;
  display: flex;
  flex-direction: column;

  .header,
  .content,
  .footer {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${COLORS.black};
    margin-bottom: 1.6rem;
    overflow: scroll;
  }

  .header {
    @media only screen and (max-width: 530px) {
      margin-top: 2rem;
    }
  }

  .content {
    max-height: 29.9rem;
    overflow: scroll;

    @media only screen and (max-width: 530px) {
      max-height: 19.9rem;
    }
  }

  .footer {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 616px) {
    width: 46%;
    height: 38.9rem;
  }

  @media only screen and (max-width: 530px) {
    width: 100%;
    height: 50%;
  }
`;
