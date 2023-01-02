// @ts-nocheck
import React from "react";
import { LoadingSpinner } from "./style";

export const Spinner: React.FC = () => {
  return (
    <LoadingSpinner data-testid="loading-icon">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
};
