import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 5rem;
`;
export const Input = styled.input`
  width: 20rem;
  height: 2.2rem;
  border: 1px solid black;
  text-indent: 0.6rem;
`;

export const Button = styled.button`
  width: 7.7rem;
  height: 2.2rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rosybrown;
  cursor: pointer;
`;
export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10rem;
  height: 10rem;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  color: ${CCC};
  /* color: rebeccapurple; */
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  border-radius: 50px;
`;

export const Close = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.6rem;
  background: white;
  border-radius: 50px;
  border: 1px solid black;
  cursor: pointer;
`;

const CCC = "#E87907";

const Colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "lightblue",
  "blue",
  "purple",
  "pink",
];
