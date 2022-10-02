import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-left: 8rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10%;
  height: 3rem;
  margin: 1rem 0;
  /* border: 1px solid grey; */
`;
export const SearchBar = styled.input`
  display: flex;
  height: 2.2rem;
  width: 22rem;
  border: 1px solid grey;
  padding-left: 0.7rem;
  font-weight: 100;
  font-size: 0.7rem;
`;

export const ColorChange = styled.div`
  color: ${(props) => (props.isTrue ? "red" : "blue")};
  cursor: pointer;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  /* width: 90%; */
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 3.3rem;
  line-height: 3.3rem;
  border-bottom: 1px solid gray;
`;

export const ColumnTitle = styled.div`
  width: 20%;
  text-align: center;
`;

export const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2.2rem;
  line-height: 2.2rem;
  border-top: 1px solid gray;

  :hover {
    background-color: #f5f2fc;
    cursor: pointer;
  }
`;

export const ColumnText = styled.div`
  width: 20%;
  text-align: center;
  font-size: 0.7rem;
`;

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 3rem 0;
  width: 1200px;

  /* background-color: white; */
`;

export const WriteBtn = styled.button`
  width: 6.6rem;
  height: 2.2rem;
  background-color: #333;
  color: white;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
