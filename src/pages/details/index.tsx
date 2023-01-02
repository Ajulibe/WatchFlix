/* eslint-disable */
import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, ModalDetails, ModalImage, ModalTitle } from "./style";
import config from "config";
import moment from "moment";

export const Details: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "state");

  return (
    <Container className="content-container">
      <ModalImage>
        {state?.backdrop_path ? (
          <img
            loading="lazy"
            width="100"
            height="100"
            src={`${config.IMAGE_BASE_URL}${state?.backdrop_path}`}
            alt={state?.original_title}
          />
        ) : (
          <p className="no-image">NO IMAGE</p>
        )}
      </ModalImage>

      <ModalTitle>
        <span className="movie__title">{state?.title}</span>
        <div>
          <span className="movie__rating">{Number(state?.vote_average).toFixed(1)} rating</span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="movie__year">{moment(state.release_date, "YYYY-MM-DD").year()}</span>
        </div>
      </ModalTitle>

      <ModalDetails>
        <div className="header">
          <b>Summary</b>
        </div>
        {state?.overview}
      </ModalDetails>
    </Container>
  );
};

Details.displayName = "SearchResults";
