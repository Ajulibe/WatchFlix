import React, { ChangeEvent } from "react";
import { Input, InputWrapper, Container } from "./style";
import { useSearchParams } from "react-router-dom";
import searchIcon from "assets/search-icon.svg";

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectEmission: React.ChangeEventHandler<HTMLSelectElement>;
  emissionType: string;
}

export const SearchHeader: React.FC<IProps> = ({ onChange, selectEmission, emissionType }) => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get("query");
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
        <select name="emissionOptions" value={selectedOption} onChange={selectEmission}>
          {emisionsData.map((item, index) => (
            <option key={`${item.value}-${index}`} value={item.value}>
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
