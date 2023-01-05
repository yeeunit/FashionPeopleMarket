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
  /* flex-direction: row; */
  /* align-items: flex-start; */
  width: 75%;
  /* background-color: rebeccapurple; */
`;

export const Logo = styled.div`
  display: flex;
  width: 15rem;
  margin-left: 5rem;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 4.4rem;
  cursor: pointer;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
    margin-left: 2rem;
  }
`;

export const LogoImg = styled.img`
  width: 3.8rem;
  /* margin-right: 0.3rem; */
  margin-bottom: 1rem;
  /* background-color: rebeccapurple; */
`;

export const MenuWrap = styled.div`
  display: flex;
  width: 70%;
  /* background-color: aliceblue; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Menu = styled.div`
  font-size: 1rem;
  margin-right: 1.3rem;
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
  width: 12%;
  /* margin-right: 2rem; */
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Login = styled.div`
  font-size: 0.6rem;
  font-weight: 200;
  margin-right: 0.6rem;
  line-height: 4rem;
  cursor: pointer;
  span {
    color: hotpink;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;
  margin-right: 2rem;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  margin-left: 65px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  span {
    background-color: gold;
    padding: 5px 10px;
    color: #ffffff;
    border-radius: 50%;
  }
`;
