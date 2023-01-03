/* eslint-disable */
import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import { getMovies } from "api";
import debounce from "lodash/debounce";
import type { Results } from "types";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";

/**
 *
 * This hook does data fetching as well as url to state sync
 * @debounce - is used to avoid multiple api calls on key press
 *
 */

export const useResultsSync = () => {
  const [searchTerm, setSearchTerm] = useState("christmas");
  const [movies, setMovies] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryValue = searchParams.get("query");
  const debounceDelay = useRef(300);
  const [value, setValue] = useLocalStorage("emissionType", "");
  const [emissionType, setEmissionType] = useState<string>((): string =>
    value !== "" ? value : "movies"
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

  const fetchMovies = useCallback(
    async (
      emissionType: string,
      searchTerm: string,
      callback: (r: Results[]) => void
    ): Promise<void> => {
      try {
        const res: any = await getMovies(emissionType, searchTerm);
        const { results } = res.data;
        isMounted.current = true;
        callback(results);
      } catch (error) {}
    },
    []
  );

  // this ensures state update on back button press
  useEffect(() => {
    // @ts-ignore
    // detect whren the back button is pressed to fetch new movies
    window.addEventListener("popstate", function () {
      if (queryValue) {
        debouncedFetchMovies(emissionType, queryValue, (res: Results[]) => {
          setMovies(res);
          setIsLoading(false);
        });
      }
    });
  }, [location]);

  const selectEmission = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    const emissionType = (e.target as HTMLInputElement).value;
    setValue(emissionType);
    setEmissionType(emissionType);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchTerm(term);
  }, []);

  useLayoutEffect(() => {
    if (!searchTerm) {
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
        debouncedFetchMovies(emissionType, searchTerm, (res: Results[]) => {
          setMovies(res);
        });
      }
    } else {
      setIsLoading(true);
      debouncedFetchMovies(emissionType, searchTerm, (res: Results[]) => {
        setMovies(res);
      });
      setSearchParams(`?query=${searchTerm}`);
    }
  }, [searchTerm, emissionType]);

  return {
    movies,
    isLoading,
    handleChange,
    selectEmission,
    isMounted,
    emissionType
  };
};
