import type { IRatings, Results } from "types";
/*eslint-disable */
import { createRatings, getRatings, getRecentMovies, getRecommendedMovies } from "api";
import { useCallback, useEffect, useRef, useState } from "react";

interface IValue {
  moviesData: Results[];
  isLoading: boolean;
  saveRating: (data: IRatings) => void;
  getMovieRatings: (movie_id: number) => void;
}

export const useResultsSync = (): IValue => {
  const [moviesData, setMoviesData] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isCalled = useRef(false);

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
        { recentMovies: [...recentMovies] },
        //@ts-ignore
        { recommendedMovies: [...recommendedMovies] }
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveRating = async (data: IRatings) => {
    if (isCalled.current) return;
    isCalled.current = true;
    try {
      await createRatings(data);
    } catch (error) {
      return error;
    } finally {
      isCalled.current = false;
    }
  };

  const getMovieRatings = useCallback(async (movie_id: number) => {
    // const { data }: any = await getRatings(movie_id);
    // console.log(data);
    // return data?.averageRating || 0;
  }, []);

  useEffect(() => {
    void fetchAllMovies();
  }, [fetchAllMovies]);

  return {
    moviesData,
    isLoading,
    saveRating,
    getMovieRatings
  };
};
