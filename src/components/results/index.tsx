/* eslint-disable */
import React, {
  FC,
  lazy,
  Suspense,
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
  useState
} from "react";
import { Wrapper } from "./style";
import { Api } from "api";
import debounce from "lodash/debounce";
import { ModalForm } from "components/modal";
import { Spinner } from "components/spinner";
import type { Results } from "types";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

// todo: add a react alert message at all the try and catch places

// code-splitting for performance gains
const Content = lazy(async () => import("../content"));

export const SearchResults: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Results[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState<Results>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const queryValue = searchParams.get("query");
  const debounceDelay = useRef(300);

  const debouncedFetchMovies = useCallback(
    debounce(async (searchTerm: string, cb) => {
      if (searchTerm !== "" && searchTerm.length > 0) {
        console.log("called fetch movies");
        try {
          await fetchMovies(searchTerm, cb);
        } catch (error) {}
      }
    }, debounceDelay.current),
    []
  );

  const fetchMovies = useCallback(
    async (searchTerm: string, callback: (r: Results[]) => void): Promise<void> => {
      try {
        const res: any = await Api.getMovies(searchTerm);
        const { results } = res.data;
        isMounted.current = true;
        callback(results);
      } catch (error) {}
    },
    []
  );
  // listen to the url Location and fetch movies everytime it changes
  useEffect(() => {
    console.log("called at location");
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

  useLayoutEffect(() => {
    if (isMounted.current === false) {
      // this block only runs on the first render
      if (queryValue) {
        navigate({
          pathname: "/results",
          search: `?query=${queryValue}`
        });
        setIsLoading(true);
        debouncedFetchMovies(queryValue, (res: Results[]) => {
          setMovies(res);
          setIsLoading(false);
        });
      }
    } else {
      // this run on every other render
      setIsLoading(true);
      debouncedFetchMovies(searchTerm, (res: Results[]) => {
        console.log("checking calls");
        setMovies(res);
        setIsLoading(false);
        console.log(res, "results as at here");
      });
      setSearchParams(`?query=${searchTerm}`);
    }
  }, [searchTerm]);

  //stop loading if there is no search query
  useEffect(() => {
    if (searchTerm === "") {
      setIsLoading(false);
    }
  }, [searchTerm]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchTerm(term);
  }, []);

  // Show modal and pass data to be shown in modal
  const showModal = (item: Results): void => {
    console.log(item, "type this correctly-------- modal data");
    setModalData(item);
    setIsVisible(true);
  };

  return (
    <>
      {/* <ModalForm
        isVisible={isVisible}
        onClick={() => {
          setIsVisible(false);
        }}
        modalData={modalData}
      /> */}
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          <Content
            handleChange={handleChange}
            data-testid="content"
            isLoading={isLoading}
            data={movies}
            showModal={showModal}
            isMounted={isMounted}
          />
        </Suspense>
      </Wrapper>
    </>
  );
};

SearchResults.displayName = "SearchResults";
