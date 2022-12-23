import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const Title = styled.h1`
  width: 20rem;
  margin: 2rem;
`;

export const InputWrap = styled.div`
  padding-top: 2rem;
  display: flex;
`;

export const Label = styled.div`
  width: 5rem;
  font-size: medium;
`;

export const InputBox = styled.input`
  width: 15rem;
  height: 2rem;
  border: 1px solid grey;
`;

export const Error = styled.span`
  color: purple;
  width: 20rem;
  padding-left: 5.5rem;
  padding-top: 0.3rem;
  font-size: 0.7rem;
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
