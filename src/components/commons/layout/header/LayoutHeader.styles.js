import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  line-height: 4rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid gray;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
  }
`;

export const LogoMenuWrap = styled.div`
  display: flex;
  width: 75%;
  /* background-color: rebeccapurple; */
`;

export const Logo = styled.h1`
  display: flex;
  width: 14rem;
  margin-left: 5rem;
  height: 3.3rem;
  font-size: 1.6rem;
  font-weight: 900;
  cursor: pointer;
  /* background-color: yellow; */
  @media ${breakPoints.mobile} {
  }
`;

export const LogoImg = styled.img`
  width: 3.8rem;
  padding-bottom: 0.5rem;
  /* background-color: rebeccapurple; */
`;

export const MenuWrap = styled.div`
  display: flex;
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
  width: 25%;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Login = styled.div`
  font-size: 0.6rem;
  font-weight: 200;
  margin-right: 0.8rem;
  line-height: 4rem;
  cursor: pointer;
`;
