import React from "react";
import { Card, CardPreview, MovieTitle } from "./style";
import config from "config";
import type { Results } from "types";

interface IProps {
  item: Results;
  onClick: () => void;
}

export const CardWidget: React.FC<IProps> = ({ item, onClick }) => {
  return (
    <Card key={item.id} onClick={onClick} className="card" data-testid="card">
      <CardPreview>
        {item.poster_path !== "" ? (
          <img
            loading="lazy"
            width="100"
            height="100"
            src={`${config.IMAGE_BASE_URL}${item?.poster_path}`}
            alt={item.original_title}
          />
        ) : (
          <p className="no-image">NO IMAGE</p>
        )}
      </CardPreview>
      <MovieTitle>
        <span>{item.original_title}</span>
      </MovieTitle>
    </Card>
  );
};
