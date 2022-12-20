import { css } from "@emotion/react";
import { breakPoints } from "./media";
import "antd/dist/antd.css";

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "One";
    /* display: flex; */
    /* justify-content: center; */
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
    :hover {
      color: inherit;
      text-decoration: none;
    }
    :link {
      color: inherit;
      text-decoration: none;
    }
    :visited {
      color: inherit;
      text-decoration: none;
    }
  }

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
  }
  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */

  @font-face {
    font-family: "One";
    src: url("/fonts/One_Mobile_Title.ttf");
  }

  @font-face {
    font-family: "Anton", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  }
`;
