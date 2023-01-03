import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  select {
    width: 13%;
    height: 44px;
    background: ${COLORS.lightBlack};
    color: ${COLORS.white};
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid transparent;
    border-right: 16px solid transparent;
    font-weight: bold;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 968px) {
    flex-direction: column-reverse;

    select {
      margin-bottom: 2rem;
      width: 50%;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
  width: 85%;

  @media only screen and (max-width: 968px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    right: 20px;
    top: 13px;
  }
`;

export const Input = styled.input`
  height: 44px;
  border-radius: 8px;
  width: 100%;
  background: ${COLORS.lightBlack};
  box-sizing: border-box;
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  padding: 1.4rem 3.4rem 1.4rem 3.4rem;
  outline: none !important;
  border-radius: 10px;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border: 1px solid transparent;
  font-size: 14px;

  ::placeholder {
    color: ${COLORS.placeholderColor};
  }

  :focus {
    border: 1px solid ${COLORS.mininalGrey};

    & + img {
      display: none;
    }
  }

  &:focus-within {
    border: 1px solid ${COLORS.mininalGrey};
  }
`;
