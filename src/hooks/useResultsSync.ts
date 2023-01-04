import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
  MutableRefObject
} from "react";
import { getMovies } from "api";
import debounce from "lodash/debounce";
import type { Results } from "types";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useSessionStorage } from "hooks/useSessionStorage";

interface IValue {
  movies: Results[];
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectEmission: (e: React.FormEvent<HTMLSelectElement>) => void;
  isMounted: MutableRefObject<boolean>;
  emissionType: string;
}

/**
 *
 *  This hook does data fetching as well as url to state sync
 *  @debounce - is used to avoid multiple api calls on key press
 *
 *
 */

export const useResultsSync = (): IValue => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [movies, setMovies] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = searchParams.get("query");
  const debounceDelay = useRef(300);
  const [value, setValue] = useSessionStorage("emissionType", "");
  const [emissionType, setEmissionType] = useState<string>((): string =>
    value !== "" ? value : "movie"
  );
  const queryValue = queryString?.includes("/") ? queryString?.split("/")[0] : queryString;

  /* =============================================
=            Get Movies/Series List            =
============================================= */
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
    debounce(async (selectedEmission, searchTerm: string, cb) => {
      try {
        await fetchMovies(selectedEmission, searchTerm, cb);
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

    if (!isMounted.current) {
      if (queryValue) {
        navigate({
          pathname: "/results",
          search: `?query=${queryValue}/${emissionType}`
        });
        setIsLoading(true);
        void debouncedFetchMovies(emissionType, queryValue, (res: Results[]) => {
          setMovies(res);
        });
      } else {
        setIsLoading(true);
        void debouncedFetchMovies(emissionType, searchedTerm, (res: Results[]) => {
          setMovies(res);
        });
      }
    } else {
      setIsLoading(true);
      void debouncedFetchMovies(emissionType, searchedTerm, (res: Results[]) => {
        setMovies(res);
      });
      setSearchParams(`?query=${searchedTerm}/${emissionType}`);
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
