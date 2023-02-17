import { Card, CardPreview, MovieTitle } from "./style";
import type { IRatings, Results } from "types";
import React, { useCallback, useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlaceHolderImage } from "components/placeholder-image";
import Rating from "components/rating";
import config from "config";

interface IProps {
  item: Results;
  saveRating: (data: IRatings) => void;
  getMovieRatings: (movie_id: number) => void;
}

export const CardWidget: React.FC<IProps> = ({ item, saveRating, getMovieRatings }) => {
  const emisionTitle = item.original_title;

  const fetchRatings = useCallback(async () => {
    const response = await getMovieRatings(item.id);
    console.log(response, "at the final card");
  }, []);

  useEffect(() => {
    void fetchRatings();
  }, [fetchRatings]);

  return (
    <Card key={item.id} className="card" data-testid="card">
      <CardPreview>
        {item.poster_path ? (
          <LazyLoadImage
            delayTime={1000}
            title={emisionTitle}
            effect="blur"
            width={340}
            height={500}
            src={`${config.IMAGE_BASE_URL}${item?.poster_path}`}
            alt={"moives"}
            placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${item?.poster_path}`}
            placeholder={<PlaceHolderImage />}
          />
        ) : (
          <PlaceHolderImage />
        )}
      </CardPreview>
      <MovieTitle>
        <span>{emisionTitle}</span>
        <Rating
          item={item}
          size={16}
          icon="star"
          scale={5}
          fillColor="gold"
          strokeColor="grey"
          className="rating"
          setRating={saveRating}
        />
      </MovieTitle>
    </Card>
  );
};
