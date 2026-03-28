import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: ${COLORS.white_secondary};
  padding: 0.94rem 0;
`;

export const Logo = styled(NavLink)`
  font-size: 1.13rem;
  display: flex;
  align-items: center;
  color: ${COLORS.font_primary};
  font-weight: 700;
  gap: 0.44rem;
`;

export const WrapperHeader = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
  gap: 0.88rem;
`;

export const WrapperInput = styled.div`
  max-width: 448px !important;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    padding-inline: 2.19rem;
    padding-block: 0.75rem;
    border: none;
    background-color: ${COLORS.input_primary};
    border-radius: 6px;
    display: block;
    outline: 3px solid transparent;
  }

  input:focus {
    outline: 3px solid ${COLORS.blue_primary};
  }

  input::placeholder {
    color: ${COLORS.font_secondary};
    font-weight: 500;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.44rem;
`;

export const Link = styled(NavLink)<{ isColor?: string }>`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: ${({ isColor }) =>
    isColor ? "trasparent" : COLORS.blue_primary};
  font-size: 0.88rem;
  height: 36px;
  display: flex;
  align-items: center;
  color: ${({ isColor }) =>
    isColor ? COLORS.font_primary : COLORS.first_white};
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ isColor }) => isColor && COLORS.green_primary};
    color: ${({ isColor }) => isColor && COLORS.first_white};
  }
`;
