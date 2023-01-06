import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin: 50px auto;
`;
export const Title = styled.h1``;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  width: 25rem;
  height: 70rem;
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
  align-items: center;
  width: 100%;
  background-color: cadetblue;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 66rem;
  height: 16rem;
  background-color: #eee;
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
