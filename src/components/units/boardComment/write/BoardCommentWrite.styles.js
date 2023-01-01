import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  /* background-color: pink; */
  padding-top: 5rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

export const WriterWrap = styled.div`
  display: flex;
  padding-bottom: 0.6rem;
`;

export const Writer = styled.input`
  width: 8.8rem;
  height: 2.2rem;
  text-indent: 0.6rem;
  margin-right: 0.4rem;
  border: 1px solid gray;
`;

export const Password = styled.input`
  width: 8.8rem;
  height: 2.2rem;
  text-indent: 0.6rem;
  margin-right: 0.4rem;

  border: 1px solid gray;
`;

export const Star = styled.div``;

export const Comment = styled.textarea`
  padding: 1rem;
  height: 8rem;
  margin-bottom: 0.8rem;
  border: 1px solid gray;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Numbers = styled.div`
  width: 5rem;
  font-size: 0.8rem;
  color: #333;
  text-align: center;
  line-height: 2.2rem;
  /* background-color: cadetblue; */
`;

export const Button = styled.button`
  width: 7rem;
  height: 2.2rem;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
`;
