import styled from "@emotion/styled";
import { COLORS } from "utils/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 21px;
  padding-top: 20px;
  border-bottom: 1px solid ${COLORS.inputBorder};

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
  }
`;
