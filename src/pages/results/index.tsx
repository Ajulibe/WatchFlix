/* eslint-disable */
import React, { FC, lazy, useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import { getMovies } from "api";
import debounce from "lodash/debounce";
import type { Results } from "types";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

// todo: add a react alert message at all the try and catch places

// code-splitting for performance gains
const Content = lazy(async () => import("components/content"));

export const SearchResults: FC = () => {
  const [searchTerm, setSearchTerm] = useState("christmas");
  const [movies, setMovies] = useState<Results[]>([]);
  const [emissionType, setEmissionType] = useState<string>("movie");
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryValue = searchParams.get("query");
  const debounceDelay = useRef(300);

  const debouncedFetchMovies = useCallback(
    debounce(async (searchTerm: string, cb) => {
      console.log("called by first render");
      console.log("called fetch movies");
      try {
        await fetchMovies(searchTerm, cb);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }, debounceDelay.current),
    []
  );

  const fetchMovies = useCallback(
    async (searchTerm: string, callback: (r: Results[]) => void): Promise<void> => {
      try {
        const res: any = await getMovies(emissionType, searchTerm);
        const { results } = res.data;
        isMounted.current = true;
        callback(results);
      } catch (error) {}
    },
    []
  );
  // listen to the url Location and fetch movies everytime it changes
  useEffect(() => {
    //@ts-ignore
    //detect whren the back button is pressed to fetch new movies
    window.addEventListener("popstate", function (event) {
      console.log("back button pressed");
      if (queryValue) {
        debouncedFetchMovies(queryValue, (res: Results[]) => {
          setMovies(res);
          setIsLoading(false);
        });
      }
    });
  }, [location]);

  const selectEmission = (e: React.FormEvent<HTMLSelectElement>) => {
    setEmissionType((e.target as HTMLInputElement).value);
  };

  useLayoutEffect(() => {
    // if there is no searched item, remove param from url
    if (!searchTerm) {
      setTimeout(() => {
        searchParams.delete("query");
        setSearchParams(searchParams);
      }, 200);
    }

    if (isMounted.current === false) {
      // this block only runs on the first render
      if (queryValue) {
        // if there is a query param call the api using that
        navigate({
          pathname: "/results",
          search: `?query=${queryValue}`
        });
        setIsLoading(true);
        debouncedFetchMovies(queryValue, (res: Results[]) => {
          setMovies(res);
        });
      } else {
        debouncedFetchMovies(searchTerm, (res: Results[]) => {
          setMovies(res);
        });
      }
    } else {
      // this run on every other render
      setIsLoading(true);
      debouncedFetchMovies(searchTerm, (res: Results[]) => {
        setMovies(res);
      });
      setSearchParams(`?query=${searchTerm}`);
    }
  }, [searchTerm, emissionType]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchTerm(term);
  }, []);

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
