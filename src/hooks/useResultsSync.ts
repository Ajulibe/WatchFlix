/*eslint-disable*/
import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import { getMovies } from "api";
import debounce from "lodash/debounce";
import type { Results } from "types";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useSessionStorage } from "hooks/useSessionStorage";

/**
 *
 *  This hook does data fetching as well as url to state sync
 *  @debounce - is used to avoid multiple api calls on key press
 *
 *
 */

export const useResultsSync = () => {
  const [searchedTerm, setSearchedTerm] = useState("christmas");
  const [movies, setMovies] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryValue = searchParams.get("query");
  const debounceDelay = useRef(300);
  const [value, setValue] = useSessionStorage("emissionType", "");
  const [emissionType, setEmissionType] = useState<string>((): string =>
    value !== "" ? value : "movie"
  );

  /*=============================================
=            Get Movies/Series List            =
=============================================*/
  const fetchMovies = useCallback(
    async (
      emission: string,
      searchTerm: string,
      callback: (r: Results[]) => void
    ): Promise<void> => {
      try {
        const res: any = await getMovies(emission, searchTerm);
        const { results } = res.data;
        isMounted.current = true;
        callback(results);
      } catch (error) {}
    },
    []
  );

  const debouncedFetchMovies = useCallback(
    debounce(async (emissionType, searchTerm: string, cb) => {
      try {
        await fetchMovies(emissionType, searchTerm, cb);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }, debounceDelay.current),
    []
  );

  // this ensures state update on back button press
  useEffect(() => {
    // detect when the back button is pressed to fetch new movies
    window.addEventListener("popstate", function () {
      if (queryValue) {
        void debouncedFetchMovies(emissionType, queryValue, (res: Results[]) => {
          setMovies(res);
          setIsLoading(false);
        });
      }
    });
  }, [location]);

  const selectEmission = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    const emissionValue = (e.target as HTMLInputElement).value;
    setValue(emissionValue);
    setEmissionType(emissionValue);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchedTerm(term);
  }, []);

  useLayoutEffect(() => {
    if (!searchedTerm) {
      setTimeout(() => {
        searchParams.delete("query");
        setSearchParams(searchParams);
      }, 200);
    }

    if (isMounted.current === false) {
      if (queryValue) {
        navigate({
          pathname: "/results",
          search: `?query=${queryValue}`
        });
        setIsLoading(true);
        debouncedFetchMovies(emissionType, queryValue, (res: Results[]) => {
          setMovies(res);
        });
      } else {
        debouncedFetchMovies(emissionType, searchedTerm, (res: Results[]) => {
          setMovies(res);
        });
      }
    } else {
      setIsLoading(true);
      debouncedFetchMovies(emissionType, searchedTerm, (res: Results[]) => {
        setMovies(res);
      });
      setSearchParams(`?query=${searchedTerm}`);
    }
  }, [searchedTerm, emissionType]);

  return {
    movies,
    isLoading,
    handleChange,
    selectEmission,
    isMounted,
    emissionType
  };
};
