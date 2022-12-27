import styled from "@emotion/styled";

export const CommentListItem = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const CommentListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin-right: 10px;
  }
`;

export const CommentListHeaderInfo = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  div {
    p {
      font-size: 20px;
      margin-bottom: 5px;
    }
    span {
      color: #bdbdbd;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

export const CommentListBody = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

export const CommentWrite = styled.textarea`
  width: 100%;
  height: 100px;
`;

export const BtnWrap = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const CancelBtn = styled.button`
  width: 110px;
  height: 40px;
  background-color: white;
  color: #000000;
  border: 1px solid #000000;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
`;

export const UpdateBtn = styled.button`
  width: 110px;
  height: 40px;
  background-color: gold;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
