import { Container, Input, InputWrapper } from "./style";
import React, { ChangeEvent } from "react";

import searchIcon from "assets/search-icon.svg";
import { useParams } from "react-router-dom";

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectEmission: React.ChangeEventHandler<HTMLSelectElement>;
  emissionType: string;
}

export const SearchHeader: React.FC<IProps> = ({ onChange, selectEmission, emissionType }) => {
  const { query } = useParams<{ query: string }>();
  const queryString = query;
  const queryValue = queryString?.includes("/") ? queryString?.split("/")[0] : queryString;
  const selectedOption = queryString?.split("/")[1] ?? emissionType;

  const emisionsData = [
    {
      value: "movie",
      name: "Movies"
    },
    {
      value: "tv",
      name: "Tv shows"
    }
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Container>
        <select
          name="emissionOptions"
          value={selectedOption}
          onChange={selectEmission}
          data-testid="select"
        >
          {emisionsData.map((item, index) => (
            <option key={`${item.value}-${index}`} value={item.value} data-testid="select-option">
              {item.name}
            </option>
          ))}
        </select>
        <InputWrapper>
          <Input
            style={{ outline: "none" }}
            defaultValue={queryValue ?? ""}
            autoFocus={Boolean(queryValue)}
            data-testid="search-input"
            type="text"
            placeholder="Search for a movie"
            onChange={onChange}
          />
          <img src={searchIcon} alt="searchIcon" />
        </InputWrapper>
      </Container>
    </div>
  );
};
