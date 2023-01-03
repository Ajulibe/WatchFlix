import React from "react";
import { generatorFn } from "utils/gradient-generator";

export const PlaceHolderImage = (): JSX.Element => {
  return (
    <div className="placeholder__image" style={{ background: generatorFn() }}>
      <div>
        <p className="no-image">No image</p>
      </div>
    </div>
  );
};
