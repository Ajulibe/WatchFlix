import React from "react";
import { Card, CardPreview, MovieTitle } from "./style";
import config from "config";
import type { Results } from "types";
import { generatorFn } from "utils/gradient-generator";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
  item: Results;
  onClick: () => void;
}

export const CardWidget: React.FC<IProps> = ({ item, onClick }) => {
  return (
    <Card key={item.id} onClick={onClick} className="card" data-testid="card">
      <CardPreview>
        {item.poster_path ? (
          <LazyLoadImage
            title="poster picture"
            loading="lazy"
            effect="blur"
            placeholderSrc={`${config.REDUCED_IMAGE_BASE_URL}${item?.poster_path}`}
            src={`${config.IMAGE_BASE_URL}${item?.poster_path}`}
            alt={item.original_title}
          />
        ) : (
          <div className="placeholder__image" style={{ background: generatorFn() }}>
            <div>
              <p className="no-image">No image</p>
            </div>
          </div>
        )}
      </CardPreview>
      <MovieTitle>
        <span>{item.original_title}</span>
      </MovieTitle>
    </Card>
  );
};
