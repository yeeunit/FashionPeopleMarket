import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  background-color: yellow;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const ColorChange = styled.div`
  color: ${(props) => (props.isTrue ? "red" : "blue")};
  cursor: pointer;
`;
