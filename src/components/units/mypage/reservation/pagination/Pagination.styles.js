import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 25%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40%;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PageButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  /* color: ${(IPageProps) => (props.isActive ? "white" : "black")}; */
  background-color: ${(props) => (props.isActive ? "#1e3932" : "white")};
`;

export const SlideButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  background-color: white;
`;
