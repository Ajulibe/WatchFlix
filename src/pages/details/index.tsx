/* eslint-disable */
import React, { FC, useCallback, useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, ModalDetails, ModalImage, ModalTitle } from "./style";
import config from "config";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getCast } from "api";

export const Details: FC = () => {
  const navigate = useNavigate();
  const [cast, setCast] = useState([]);
  const {
    state: { item, emissionType }
  } = useLocation();
  console.log(item, "state");

  const getCastList = useCallback(async () => {
    try {
      const { data }: any = await getCast(emissionType, item.id);
      setCast(data.cast);
    } catch (error) {}
  }, []);

  useLayoutEffect(() => {
    getCastList();
  }, [getCastList]);

  return (
    <Container className="content-container">
      {item?.backdrop_path && (
        <ModalImage>
          <LazyLoadImage
            alt={item?.original_title}
            src={`${config.IMAGE_BASE_URL}${item?.backdrop_path}`}
            placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${item?.backdrop_path}`}
            effect="blur"
          />
        </ModalImage>
      )}

      <ModalTitle>
        <span className="movie__title">{item?.title}</span>
        <div>
          <span className="movie__rating">{Number(item?.vote_average).toFixed(1)}</span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="movie__year">{moment(item.release_date, "YYYY-MM-DD").year()}</span>
        </div>
      </ModalTitle>

      <ModalDetails>
        <div className="header__container">
          <div className="header">
            <b>Summary</b>
          </div>
          {item?.overview}
        </div>
      </ModalDetails>

      <ModalDetails>
        <div className="cast__header">
          <b>Cast</b>
        </div>
        <div className="wrapper">
          {cast.map((item: any) => {
            return (
              <>
                {item.profile_path !== null ? (
                  <div className="movie__cast">
                    <div className="cast__image">
                      <LazyLoadImage
                        alt={item?.name}
                        src={`${config.IMAGE_BASE_URL}${item?.profile_path}`}
                        placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${item?.profile_path}`}
                        effect="blur"
                      />
                    </div>
                    <span className="cast__name"> {item.original_name}</span>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </ModalDetails>
    </Container>
  );
};

Details.displayName = "SearchResults";
