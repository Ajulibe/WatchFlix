import React from "react";
import { Card, CardPreview, MovieTitle } from "./style";
import config from "config";
import type { Results } from "types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlaceHolderImage } from "components/placeholder-image";

interface IProps {
  item: Results;
  onClick: () => void;
  emissionType: string;
}

export const CardWidget: React.FC<IProps> = ({ item, onClick, emissionType }) => {
  const emisionTitle = emissionType === "tv" ? item.original_name : item.original_title;

  return (
    <Card key={item.id} onClick={onClick} className="card" data-testid="card">
      <CardPreview>
        {item.poster_path ? (
          <LazyLoadImage
            delayTime={1000}
            title={emisionTitle}
            effect="blur"
            width={700}
            height={500}
            placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${item?.poster_path}`}
            src={`${config.IMAGE_BASE_URL}${item?.poster_path}`}
            alt={emisionTitle}
            placeholder={<PlaceHolderImage />}
          />
        ) : (
          <PlaceHolderImage />
        )}
      </CardPreview>
      <MovieTitle>
        <span>{emisionTitle}</span>
      </MovieTitle>
    </Card>
  );
};
