import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.4rem;
  line-height: 3.3rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid gray;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
  }
`;

export const LogoMenuWrap = styled.div`
  display: flex;
  width: 50rem;
  width: 70%;
  /* background-color: rebeccapurple; */
`;

export const Logo = styled.h1`
  width: 9rem;
  margin-left: 8rem;
  height: 3.3rem;
  cursor: pointer;
  /* background-color: yellow; */
  @media ${breakPoints.mobile} {
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  width: 20rem;
  width: 50%;
  /* background-color: aliceblue; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Menu = styled.div`
  font-size: 1rem;
  margin-right: 1.5rem;
  :hover {
    cursor: pointer;
    color: #0070f3;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Login = styled.div`
  font-size: 0.8rem;
  font-weight: 200;
  margin-right: 0.8rem;
  line-height: 3rem;
  cursor: pointer;
`;
