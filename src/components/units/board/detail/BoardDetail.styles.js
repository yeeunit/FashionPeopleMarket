import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1500px;
  padding: 5% 10%;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 80rem;
  height: 40rem;
  /* border: 1px solid gray; */
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* height: 33rem; */
  /* border: 1px solid gray; */
`;

export const BigImage = styled.img`
  width: 35rem;
  height: 25rem;
  background-color: #eee;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const SmallImgWrap = styled.div`
  display: flex;
`;
export const SmallImage = styled.img`
  width: 9rem;
  height: 6rem;
  margin-right: 1rem;
  background-color: #eee;
  border-radius: 1rem;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InputWrap = styled.div`
  display: flex;
  /* border: 1px solid red; */
  height: 3rem;
  margin: 1rem;
`;

export const Label = styled.div`
  width: 7rem;
  font-size: 1.4rem;
  font-weight: bold;
  /* background-color: pink; */
`;

export const TextBox = styled.div`
  font-size: 1.2rem;
`;

export const DateWrap = styled.div`
  display: flex;
  /* padding: 1rem; */
`;
export const Date = styled.div`
  font-size: 0.6rem;
  margin: 1rem;
`;
export const LikeBox = styled.div`
  display: flex;
  padding: 1rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RegisterBtn = styled.div`
  width: 6rem;
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #333;
  color: white;
  text-align: center;
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const CancelBtn = styled.div`
  width: 6rem;
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #aaa;
  color: white;
  text-align: center;
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;
