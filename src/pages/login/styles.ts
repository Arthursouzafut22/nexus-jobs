import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  padding: 0 2rem 0 2rem;
`;

export const WrapperForm = styled.div`
  background-color: ${COLORS.white};
  padding: 2rem;
  max-width: 384px;
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;

  h1 {
    font-size: 1.5rem;
    line-height: 32px;
  }

  .first-p {
    color: ${COLORS.font_secondary};
    font-size: 0.88rem;
  }
`;
export const Form = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.06rem;

  button {
    font-size: 0.88rem;
    font-weight: 500;
    background-color: ${COLORS.blue_primary};
    color: ${COLORS.white};
    display: block;
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 6px;
  }

  p:last-child {
    color: ${COLORS.font_secondary};
    text-align: center;
    font-size: 0.88rem;

    a {
      color: ${COLORS.blue_primary};
    }
  }
`;


