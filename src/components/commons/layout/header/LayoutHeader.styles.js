import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4.4rem;
  line-height: 3.3rem;
  padding: 0.5rem 5rem;
  border-bottom: 1px solid gray;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    padding: 0.8em;
  }
`;

export const Logo = styled.h1`
  width: 7rem;
  cursor: pointer;

  /* background-color: yellow; */
`;

export const MenuWrap = styled.div`
  display: flex;
  width: 70%;
  /* background-color: aliceblue; */
`;

export const Menu = styled.div`
  font-size: 1rem;
  margin-right: 1.5rem;
  /* line-height: 3rem; */
  :hover {
    cursor: pointer;
    color: #0070f3;
  }
  @media ${breakPoints.mobile} {
    /* font-size: 0.8em;
    margin-right: 0.8em; */
    display: none;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  width: 15%;
  /* background-color: pink; */
`;

export const Login = styled.div`
  font-size: 0.8rem;
  font-weight: 200;
  margin-right: 0.8rem;
  line-height: 3rem;
  cursor: pointer;
`;
