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

export const JoinBtn = styled.div`
  background-color: #eee;
  text-align: center;
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem;
`;
