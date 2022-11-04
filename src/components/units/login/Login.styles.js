import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const Title = styled.h1``;

export const InputWrap = styled.div`
  padding-top: 1rem;
  display: flex;
`;

export const Label = styled.div`
  width: 5rem;
`;

export const InputBox = styled.input`
  width: 15rem;
  height: 2rem;
`;

export const Error = styled.span`
  color: tomato;
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
