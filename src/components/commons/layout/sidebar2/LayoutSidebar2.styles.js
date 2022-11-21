import styled from "@emotion/styled";

export const Title = styled.h1``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  height: 70rem;
  border-right: 1px solid #555;
`;

export const Profile = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 5rem;
  background-color: #eee;
  border-radius: 999px;
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
