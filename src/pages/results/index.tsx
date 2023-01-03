import React, { lazy } from "react";
import { useResultsSync } from "hooks/use-results-sync";

// code-splitting for performance gains
const Content = lazy(async () => import("components/content"));

export const SearchResults: React.FC = () => {
  const { movies, isLoading, handleChange, selectEmission, isMounted, emissionType } =
    useResultsSync();

  return (
    <Content
      selectEmission={selectEmission}
      handleChange={handleChange}
      data-testid="content"
      isLoading={isLoading}
      data={movies}
      isMounted={isMounted}
      emissionType={emissionType}
    />
  );
};

SearchResults.displayName = "SearchResults";
