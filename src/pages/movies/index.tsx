/*eslint-disable*/
import {
  CurlyTitle,
  FlexContainer,
  Header,
  HeaderWrapper,
  MovieWrapper,
  Title,
  TitleWrapper
} from "./style";
import React, { useCallback } from "react";

import { Button } from "@chakra-ui/react";
import { CardWidget } from "components/card";
import { IRatings } from "types";
import { PagesWrapper } from "layout";
import { Spinner } from "components/spinner";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { useResultsSync } from "hooks/useResultsSync";

const HeaderText = React.memo(() => {
  const history = useHistory();
  const navigateHome = (): void => {
    history.push("/");
  };

  return (
    <TitleWrapper onClick={navigateHome} data-testid="header">
      <CurlyTitle>watch</CurlyTitle>
      <Title>Flix</Title>
    </TitleWrapper>
  );
});

HeaderText.displayName = "HeaderText";

const Movies: React.FC = () => {
  const { moviesData, isLoading, saveRating, getMovieRatings } = useResultsSync();
  const recent = moviesData[0]?.recentMovies;
  const recommended = moviesData[1]?.recommendedMovies;

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <Spinner />;
  }

  const handleLogout = async () => oktaAuth.signOut();
  const addRating = useCallback((data: IRatings) => saveRating(data), []);

  return (
    <PagesWrapper>
      <FlexContainer>
        <HeaderWrapper>
          <HeaderText />
          <Button
            onClick={handleLogout}
            className="button"
            type="submit"
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
          >
            Log out
          </Button>
        </HeaderWrapper>

        <Header>Last Seen Movies</Header>

        <MovieWrapper>
          {!isLoading &&
            recent?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  saveRating={addRating}
                  getMovieRatings={getMovieRatings}
                />
              );
            })}
          {isLoading && <Spinner />}
        </MovieWrapper>
        <Header>Recent Movies</Header>
        <MovieWrapper>
          {!isLoading &&
            recent?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  saveRating={addRating}
                  getMovieRatings={getMovieRatings}
                />
              );
            })}
          {isLoading && <Spinner />}
        </MovieWrapper>

        <Header>Recommended Movies</Header>
        <MovieWrapper>
          {!isLoading &&
            recommended?.map((item: any) => {
              return (
                <CardWidget
                  key={item.id}
                  item={item}
                  saveRating={addRating}
                  getMovieRatings={getMovieRatings}
                />
              );
            })}
          {isLoading && <Spinner />}
        </MovieWrapper>
      </FlexContainer>
    </PagesWrapper>
  );
};

export default Movies;
Movies.displayName = "Movies";
