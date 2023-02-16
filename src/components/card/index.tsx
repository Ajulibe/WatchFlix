import { Card, CardPreview, MovieTitle } from "./style";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlaceHolderImage } from "components/placeholder-image";
import Rating from "components/rating";
import React from "react";
import type { Results } from "types";
import config from "config";

interface IProps {
  item: Results;
  onClick: () => void;
}

export const CardWidget: React.FC<IProps> = ({ item, onClick }) => {
  const emisionTitle = item.original_title;

  return (
    <Card key={item.id} onClick={onClick} className="card" data-testid="card">
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
          size={16}
          icon="star"
          scale={5}
          fillColor="gold"
          strokeColor="grey"
          className="rating"
        />
      </MovieTitle>
    </Card>
  );
};
