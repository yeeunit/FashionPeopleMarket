import styled from "@emotion/styled";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
  width: 10rem;
  height: 25rem;
  overflow: hidden;
  position: fixed;
  /* position: absolute; */
  top: 250px;
  z-index: 99;
  left: 1100px;
`;

export const Title = styled.div`
  text-align: center;
  margin: 1rem;
`;

export const ItemBox = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #eee;
  cursor: pointer;
`;
