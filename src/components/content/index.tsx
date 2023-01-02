/*eslint-disable*/
import React, { ChangeEvent, MutableRefObject } from "react";
import {
  Empty,
  FlexContainer,
  MovieWrapper,
  Title,
  CurlyTitle,
  TitleWrapper,
  VideoWrapper
} from "./style";
import { CardWidget } from "components/card";
import { Spinner } from "components/spinner";
import type { Results } from "types";
import { SearchHeader } from "components/searchInput";

interface IProps {
  isLoading: boolean;
  data: Results[];
  isMounted: MutableRefObject<boolean>;
  showModal: (i: Results) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectEmission: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const Content: React.FC<IProps> = ({
  isLoading,
  data,
  isMounted,
  showModal,
  handleChange,
  selectEmission
}) => {
  return (
    <FlexContainer>
      <TitleWrapper>
        <CurlyTitle>watch</CurlyTitle>
        <Title>Flix</Title>
      </TitleWrapper>
      <SearchHeader onChange={handleChange} selectEmission={selectEmission} />
      <MovieWrapper>
        {!isLoading &&
          data.map((item) => {
            return (
              <CardWidget
                key={item.id}
                item={item}
                onClick={() => {
                  showModal(item);
                }}
              />
            );
          })}

        {data.length === 0 && !isLoading && isMounted.current ? (
          <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
        ) : null}
        {isLoading && <Spinner />}
      </MovieWrapper>
    </FlexContainer>
  );
};

export default Content;
