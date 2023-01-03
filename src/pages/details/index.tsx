import { FC, useCallback, useState, useLayoutEffect, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ModalDetails, ModalImage, ModalTitle } from "./style";
import config from "config";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getCast } from "api";
import { PagesWrapper } from "layout";

const Details: FC = () => {
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state?.item;
  const emissionType = state?.emissionType;

  const getCastList = useCallback(async () => {
    try {
      const { data }: any = await getCast(emissionType, item.id);
      setCast(data.cast);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (typeof item === "undefined") {
      return navigate("/results");
    }
  }, []);

  useLayoutEffect(() => {
    void getCastList();
  }, [getCastList]);

  const releaseDate =
    emissionType === "tv"
      ? String(moment(item?.first_air_date, "YYYY-MM-DD").year())
      : String(moment(item?.release_date, "YYYY-MM-DD").year());

  return (
    <PagesWrapper>
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
          <div>
            <span className="movie__title">{item?.title}</span>
            <div>
              <span className="movie__rating">{Number(item?.vote_average).toFixed(1)}</span>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="movie__year">{releaseDate}</span>
            </div>
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

        {cast.length > 0 && (
          <ModalDetails>
            <div className="animation__wrapper">
              <div className="cast__header">
                <b>Cast</b>
              </div>
              <div className="wrapper">
                {cast.map((i: any) => {
                  return i.profile_path !== null ? (
                    <div key={i?.profile_path} className="movie__cast">
                      <div className="cast__image">
                        <LazyLoadImage
                          alt={i?.name}
                          src={`${config.IMAGE_BASE_URL}${i?.profile_path}`}
                          placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${i?.profile_path}`}
                          effect="blur"
                        />
                      </div>
                      <span className="cast__name"> {i.original_name}</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </ModalDetails>
        )}
      </Container>
    </PagesWrapper>
  );
};

export default Details;

Details.displayName = "Details";
