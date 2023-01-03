import React from "react";
import { Empty, FlexContainer, MovieWrapper, Title, CurlyTitle, TitleWrapper } from "./style";
import { CardWidget } from "components/card";
import { SearchHeader } from "components/searchheader";
import { useNavigate } from "react-router-dom";
import { useResultsSync } from "hooks/useResultsSync";
import { PagesWrapper } from "layout";
import { Spinner } from "components/spinner";

const HeaderText = React.memo(() => {
  const navigate = useNavigate();

  const navigateHome = (): void => {
    navigate("/");
  };

  return (
    <TitleWrapper onClick={navigateHome}>
      <CurlyTitle>watch</CurlyTitle>
      <Title>Flix</Title>
    </TitleWrapper>
  );
});

HeaderText.displayName = "HeaderText";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { movies, isLoading, handleChange, selectEmission, isMounted, emissionType } =
    useResultsSync();

  return (
    <PagesWrapper>
      <FlexContainer>
        <HeaderText />
        <SearchHeader
          onChange={handleChange}
          selectEmission={selectEmission}
          emissionType={emissionType}
        />

        <MovieWrapper>
          {!isLoading &&
            movies.map((item) => {
              return (
                <CardWidget
                  emissionType={emissionType}
                  key={item.id}
                  item={item}
                  onClick={() => {
                    navigate(`/results/${item.id}`, { state: { item, emissionType } });
                  }}
                />
              );
            })}

          {movies.length === 0 && !isLoading && isMounted.current ? (
            <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
          ) : null}
          {isLoading && <Spinner />}
        </MovieWrapper>
      </FlexContainer>
    </PagesWrapper>
  );
};

export default SearchPage;
SearchPage.displayName = "SearchPage";
