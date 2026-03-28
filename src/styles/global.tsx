import { css, Global } from "@emotion/react";
import { COLORS } from "./colors";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          box-sizing: border-box;
          margin: 0;
        }

        html * {
          font-family: "Inter", sans-serif;
        }

        body {
          background-color: ${COLORS.first_white};
        }

        li {
          list-style: none;
          padding: 0;
        }
        a {
          text-decoration: none;
        }
      `}
    ></Global>
  );
};
