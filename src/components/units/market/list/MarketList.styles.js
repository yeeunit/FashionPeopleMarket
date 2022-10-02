import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 1920px; */
  /* background-color: aliceblue; */
  margin-top: 4rem;
  margin-left: 8rem;

  @media ${breakPoints.mobile} {
    /* margin: 0; */
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10%;
  /* background-color: grey; */
  margin-bottom: 2rem;
`;

export const WriteBtn = styled.button`
  width: 6.6rem;
  height: 2.2rem;
  background-color: #f5f2fc;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #333;
    color: white;
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  /* border: 1px solid grey; */
`;

export const OneBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 19rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: white;
  border: 1px solid grey;
  overflow: hidden;
`;
export const Image = styled.img`
  /* width: 12rem; */
  height: 50%;
  background-color: #eee;
  cursor: pointer;
`;

export const ColorChange = styled.div`
  color: ${(props) => (props.isTrue ? "red" : "blue")};
  cursor: pointer;
`;
