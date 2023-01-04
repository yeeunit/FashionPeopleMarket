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
  line-height: 2rem;
`;

export const InputBox = styled.input`
  text-indent: 0.6rem;
  width: 15rem;
  height: 2rem;
  border: 1px solid grey;
  font-size: 0.8rem;
`;

export const Error = styled.span`
  color: purple;
  width: 20rem;
  padding-left: 5.5rem;
  padding-top: 0.3rem;
  font-size: 0.7rem;
`;

export const LoginBtn = styled.button`
  background-color: #222;
  color: white;
  text-align: center;
  width: 6rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 2rem;
`;
export const JoinWrap = styled.div`
  display: flex;
`;
export const JoinBtn = styled.div`
  /* background-color: #222; */
  color: #222;

  cursor: pointer;
  border-bottom: 1px solid #222;

  :hover {
  }
`;
