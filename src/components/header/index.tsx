import React, { ChangeEvent, useRef } from "react";
import { Wrapper } from "./style";
import { SearchBar } from "components/searchInput";

interface IProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IProps> = ({ handleChange }) => {
  return (
    <Wrapper>
      <SearchBar onChange={handleChange} />
    </Wrapper>
  );
};

export default Header;
