import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;

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
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding: 14px 34px 14px 34px;
  outline: none !important;
  border-radius: 10px;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border: 1px solid transparent;

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
