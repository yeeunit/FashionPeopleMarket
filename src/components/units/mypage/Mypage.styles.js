import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
`;
export const Title = styled.h1`
  height: 10rem;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  width: 20rem;
  height: 66rem;
  /* background-color: darkblue; */
  border-right: 1px solid #555;
`;

export const Profile = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 5rem;
  background-color: #eee;
  border-radius: 999px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const Name = styled.div`
  margin-top: 3rem;
  font-size: 1.5rem;
`;

export const Tabs = styled.div`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #555;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  padding: 3rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 66rem;
  height: 16rem;
  background-color: darksalmon;
  /* background-color: #eee; */
  border-radius: 10px;
  text-align: center;
  padding: 3rem;
`;

export const box1 = styled.div``;
export const box2 = styled.div``;
export const box3 = styled.div``;

export const bar = styled.div`
  display: flex;
`;

export const InputWrap = styled.div`
  padding: 0.7rem;
  display: flex;
`;

export const Label = styled.div`
  width: 5rem;
`;

export const InputBox = styled.input`
  width: 15rem;
  height: 2rem;
`;

export const LoginBtn = styled.div`
  background-color: #eee;
  text-align: center;
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem;
`;

//

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #33413e;
  padding-top: 3rem;
  padding-left: 3rem;
  align-content: space-around;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Body = styled.main`
  width: 60vw;
  /* height: 100vh; */
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 100vw;
    /* margin: auto; */
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const SideMenu = styled.button`
  color: white;
  border: none;
  margin: auto;
  font-size: 16px;
  width: 11.875rem;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  background: #5d7572;
  border-radius: 10px;
  margin-block: 0.625rem;
`;

export const StaySideMenu = styled(SideMenu)`
  font-weight: 700;
  background-color: #6a564f;
  margin: auto;
`;

export const StayMenu = styled.h3`
  color: black;
  width: 80%;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;

  font-weight: 500;
  font-size: 20px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.5px;

  @media ${breakPoints.mobile} {
    padding-top: -2rem;
    padding-bottom: -2rem;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    padding-top: -2rem;
    padding-bottom: -2rem;
  }
`;

export const Line = styled.hr`
  border: 0.1px solid #c4c4c4;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

// export const Profile = styled.img`
//   width: 5rem;
//   height: 5rem;
//   border-radius: 5rem;
//   margin-right: 1rem;
//   margin-top: 0.5rem;
//   margin: auto;
//   display: flex;
// `;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
`;

export const UserName = styled.h4`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 0.625rem;
  color: white;
`;

export const UserButton = styled.button`
  width: 6.2rem;
  height: 1.875rem;
  border: none;
  border-radius: 0.313rem;
  background-color: #6a564f;
  color: white;
`;

export const SideMenuWrapper = styled.div`
  margin-right: 3rem;
`;
