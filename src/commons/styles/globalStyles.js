import { css } from "@emotion/react";
import { breakPoints } from "./media";
// import "antd/dist/antd.css";
import "antd/dist/reset.css";

export const globalStyles = css`
  /* html,
  body {
    padding: 0;
    margin: 0;
  } */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "One";
  }

  Link {
    color: inherit;
    text-decoration: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      color: inherit;
      text-decoration: none;
    }

    :visited {
      color: inherit;
      text-decoration: none;
    }
  }

  @font-face {
    font-family: "One";
    src: url("/fonts/One_Mobile_Title.ttf");
  }

  /* @font-face {
    font-family: "Anton", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  } */

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
  }
`;
