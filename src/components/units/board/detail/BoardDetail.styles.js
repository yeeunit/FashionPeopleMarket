import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1500px;
  padding: 5rem 7rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 66rem; */
  height: 5rem;
  /* border: 1px solid gray; */
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 80rem;
  height: 40rem;
  /* border: 1px solid gray; */
`;

export const TitleBox = styled.div`
  height: 3rem;
  padding: 0.3rem;
  font-size: 1.6rem;
  /* background-color: lightgray; */
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
  /* height: 3rem; */
  margin: 1rem;
`;

export const Label = styled.div`
  width: 7rem;
  font-size: 1.4rem;
  font-weight: bold;
  /* background-color: pink; */
`;

export const TextBox = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  span {
    font-size: 1rem;
  }
`;

export const YoutubeBox = styled.div`
  width: 26rem;
  height: 14rem;
  /* background-color: #eee; */
`;

export const VideoImage = styled.img`
  height: 100%;
  src: url("https://www.nucleustechnologies.com/blog/wp-content/uploads/2020/12/video-is-not-available-1.jpg");
`;

export const DateWrap = styled.div`
  display: flex;
  /* padding: 1rem; */
`;
export const Date = styled.div`
  font-size: 0.8rem;
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
