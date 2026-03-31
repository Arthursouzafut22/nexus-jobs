import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const WrapperInput = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: ${COLORS.input_primary};
  border-radius: 6px;
  display: block;
  font-size: 1rem;
  outline: 3px solid transparent;

  &:focus {
    outline: 3px solid ${COLORS.blue_primary};
  }

  &::placeholder {
    color: ${COLORS.font_secondary};
    font-weight: 500;
  }
`;
