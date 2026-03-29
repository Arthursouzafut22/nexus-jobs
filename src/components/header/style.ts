import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { NavLink } from "react-router-dom";

export const Header = styled.header<{ mobile: boolean }>`
  background-color: ${COLORS.white_secondary};
  padding: ${({ mobile }) => (mobile ? " 1.19rem 0  1.19rem 0" : "0.94rem 0")};
  position: relative;
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

export const WrapperInput = styled.div<{ mobile?: boolean }>`
  max-width: ${({ mobile }) => (mobile ? "100%" : "448px")}!important;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-inline: 2.19rem;
  padding-block: 0.75rem;
  border: none;
  background-color: ${COLORS.input_primary};
  border-radius: 6px;
  display: block;
  outline: 3px solid transparent;

  &:focus {
    outline: 3px solid ${COLORS.blue_primary};
  }

  &::placeholder {
    color: ${COLORS.font_secondary};
    font-weight: 500;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.44rem;
`;

export const Link = styled(NavLink)<{ isColor?: string; mobile?: boolean }>`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: ${({ isColor }) =>
    isColor ? "trasparent" : COLORS.blue_primary};
  font-size: 0.88rem;
  height: 36px;
  width: ${({ mobile }) => mobile && "100%"} !important;
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

export const WrapperMenuMobile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.19rem 2rem 1.19rem 2rem;
  gap: 8px;
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: ${COLORS.white_secondary};
`;

export const ButtonMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background-color: ${COLORS.green_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;
