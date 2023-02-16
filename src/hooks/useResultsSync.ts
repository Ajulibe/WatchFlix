/*eslint-disable */
import { getRecentMovies, getRecommendedMovies } from "api";
import { useCallback, useEffect, useState } from "react";

import type { Results } from "types";

interface IValue {
  moviesData: Results[];
  isLoading: boolean;
}

export const useResultsSync = (): IValue => {
  const [moviesData, setMoviesData] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAllMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const [recentMovies, recommendedMovies] = await Promise.all([
        getRecentMovies(),
        getRecommendedMovies()
      ]);
      //@ts-ignore
      setMoviesData([
        //@ts-ignore
        { recentMovies: [...recentMovies.data.results] },
        //@ts-ignore
        { recommendedMovies: [...recommendedMovies.data.results] }
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchAllMovies();
  }, [fetchAllMovies]);

  return {
    moviesData,
    isLoading
  };
};
