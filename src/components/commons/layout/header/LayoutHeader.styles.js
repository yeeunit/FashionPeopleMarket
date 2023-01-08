import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import * as A from "../../../../commons/styles/commonStyles";
export const Wrapper = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  line-height: 4rem;
  padding: 0.5rem 5rem 0 3rem;
  border-bottom: 1px solid gray;
  /* background-color: yellow; */
`;

export const LogoMenuWrap = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  width: 12.8rem;
  /* margin-left: 5rem; */
  font-size: 1.6rem;
  font-weight: 800;
  /* line-height: 4rem; */
  cursor: pointer;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
    margin-left: 2rem;
  }
`;

export const LogoImg = styled.img`
  width: 3.8rem;
  margin-bottom: 0.4rem;
`;

export const MenuWrap = styled.div`
  display: flex;
  width: 14rem;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    /* display: none; */
  }
`;

export const Menu = styled.div`
  font-size: 0.8rem;
  margin-right: 1.2rem;
  :hover {
    cursor: pointer;
    font-size: 1rem;
    color: ${A.BlueColor};
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 12%; */
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
    color: ${A.BlueColor};
  }
  .yellow-circle {
    /* width: 10px;
    height: 10px;
    background-color: gold;
    border-radius: 50px; */
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
