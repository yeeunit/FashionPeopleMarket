import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;
export const Title = styled.h1``;

export const BoxWrap = styled.div`
  display: flex;
  /* width: 50rem;
  height: 30rem;
  border: 1px solid black; */
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  border: 1px solid black;
`;

export const Lable = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 1rem;
  background: #eee;
  object-fit: fill;
`;
export const Button = styled.div`
  width: 4.4rem;
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #777;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #333;
  }
`;
