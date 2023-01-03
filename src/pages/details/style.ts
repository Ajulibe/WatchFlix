import styled from "@emotion/styled";
import { COLORS } from "utils/colors";
import { easeIn, grow } from "utils/animations";

export const Container = styled.div`
  width: 100%;
  padding: 4rem 2.3rem 4rem 2.7rem;
  box-sizing: border-box;
  color: ${COLORS.white};
  overflow: hidden;
  animation: ${easeIn} 0.4s ease-in;
  will-change: auto;

  @media only screen and (max-width: 687px) {
    padding: 2rem 0.2rem 2.8rem 0.2rem;
  }
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  color: ${COLORS.white};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  font-family: "Helvetica Neue", Baskervville, serif, Arial, Helvetica, sans-serif;
  overflow: hidden;

  div {
    transform: translateY(100px);
    animation: ${grow} 0.4s ease-in-out 0.2s forwards;
    will-change: auto;
    opacity: 0.5;
  }

  .movie__title {
    font-size: 4rem;

    @media only screen and (max-width: 489px) {
      font-size: 3rem;
    }

    & + div {
      margin-top: 2rem;
    }
  }

  .movie__rating {
    font-size: 1.8rem;
    font-weight: bold;
    background-color: ${COLORS.primary};
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.6rem;
  }

  .movie__year {
    font-size: 1.8rem;
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${COLORS.white};
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 3rem;
  margin-top: 3.4rem;
  text-align: justify;
  font-family: "Helvetica Neue", Baskervville, serif, Arial, Helvetica, sans-serif;

  .header__container {
    width: 100%;
    transform: translateY(100px);
    animation: ${grow} 0.4s ease-in-out 0.3s forwards;
    will-change: auto;
    opacity: 0.5;
  }

  .animation__wrapper {
    animation: ${easeIn} 0.4s ease-in-out 0.5s forwards;
    will-change: auto;
    opacity: 0;
  }

  .header {
    font-size: 2.4rem;
  }

  .cast__header {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 18rem);
    grid-gap: 10px;

    @media only screen and (max-width: 393px) {
      grid-template-columns: repeat(auto-fill, 14rem);
    }
  }

  .movie__cast {
    color: white;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    flex-direction: column;

    .cast__name {
      margin-bottom: 3rem;
    }

    img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;

      @media only screen and (max-width: 393px) {
        width: 14rem;
        height: 14rem;
      }
    }
  }
`;

export const ModalImage = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-height: 39.8rem;
  border-radius: 16px;
  border: 1px solid ${COLORS.mininalGrey};
  overflow: hidden;
  opacity: 0;
  position: relative;
  animation: ${easeIn} 1s ease-in-out 0.1s forwards;
  will-change: auto;
  transition: all 0.2s ease-in;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media only screen and (max-width: 971px) {
    height: 34.8rem;
  }
  @media only screen and (max-width: 763px) {
    height: 24.8rem;
  }

  @media only screen and (max-width: 658px) {
    height: auto;
  }
`;
