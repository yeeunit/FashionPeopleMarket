import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const Title = styled.h1`
  width: 25rem;
  margin: 2rem;
  /* background-color: aliceblue; */
`;

export const InputWrap = styled.div`
  padding-top: 1rem;
  display: flex;
  /* background-color: aliceblue; */
`;

export const Label = styled.div`
  width: 5.5rem;
  font-size: medium;
  line-height: 2.2rem;
`;

export const InputBox = styled.input`
  width: 20rem;
  height: 2.2rem;
  padding-left: 1rem;
  font-size: 0.7rem;
  border: 1px solid grey;
`;

export const Error = styled.span`
  color: purple;
  width: 20rem;
  padding-left: 3.3rem;
  padding-top: 0.3rem;
  font-size: 0.7rem;
`;

export const JoinBtn = styled.button`
  background-color: #222;
  color: white;
  text-align: center;
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 2rem;
`;

export const LoginWrap = styled.div`
  display: flex;
`;
export const LoginBtn = styled.div`
  /* background-color: #222; */
  color: #222;

  cursor: pointer;
  border-bottom: 1px solid #222;

  :hover {
  }
`;
