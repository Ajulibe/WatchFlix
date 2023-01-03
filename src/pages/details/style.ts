import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 23px 28px 27px;
  box-sizing: border-box;
  color: ${COLORS.white}
  animation: zoomOut 0.2s ease-in;
`;

export const ModalTitle = styled.div`
  width: 100%;
  font-weight: bold;
  color: ${COLORS.white};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  padding-left: 4rem;
  font-family: "Helvetica Neue", Baskervville, serif, Arial, Helvetica, sans-serif;

  .movie__title {
    font-size: 4rem;

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
    padding: 1rem;
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
  width: 80%;
  padding: 0 4rem;
  text-align: justify;
  font-family: "Helvetica Neue", Baskervville, serif, Arial, Helvetica, sans-serif;

  .header__container {
    width: 50%;
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
    grid-template-columns: repeat(3, 180px);
    grid-gap: 10px;
    width: 100%;
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
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
  }
`;

export const ModalImage = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 45.9rem;
  border-radius: 16px;
  border: 1px solid ${COLORS.mininalGrey};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 100 !important;
    position: relative;
  }

  .no-image {
    font-size: 20px;
    font-weight: 600;
  }
`;
