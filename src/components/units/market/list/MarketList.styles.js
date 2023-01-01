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
  font-size: 2.4rem;
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
export const ImageBox = styled.div`
  width: 14rem;
  height: 20rem;
  cursor: pointer;

  /* background-color: pink; */
  /* object-fit: cover; */
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  background-color: yellow;
  object-fit: cover;

  :hover {
    /* background: rgba(9, 9, 9, 0.5); */
    transform: translateY(0);
    transform: scale(1.1);
  }
  /* :hover::after {
    content: "예약하기";
    height: 100%;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    text-align: center;
    line-height: 9rem;
    color: #fff;
    background: rgba(9, 9, 9, 0.5);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s ease-in-out; 
   } */
`;
export const TextBox = styled.div`
  padding: 1rem;
  /* background-color: yellow; */
  font-size: 0.8rem;
  object-fit: cover;
  div:first-child {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const ColorChange = styled.div`
  color: ${(props) => (props.isTrue ? "red" : "blue")};
  cursor: pointer;
`;
