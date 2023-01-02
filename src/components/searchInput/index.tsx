import React, { ChangeEvent } from "react";
import { Input, InputWrapper } from "./style";
import { useSearchParams } from "react-router-dom";
import searchIcon from "assets/search-icon.svg";

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<IProps> = ({ onChange }) => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("query");

  return (
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
  );
};
