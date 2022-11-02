import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding: 3rem 10%;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const InputWrap = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin: 2rem;
`;

export const Label = styled.div`
  width: 12rem;
  height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  /* background-color: pink; */
`;
export const InputBox = styled.input`
  border: 1px solid red;
  width: 22rem;
`;

export const RegisterBtn = styled.button`
  width: 7rem;
  height: 3.3rem;
  border: none;
  border-radius: 5px;
  background-color: #555;
  color: white;

  cursor: pointer;
`;
