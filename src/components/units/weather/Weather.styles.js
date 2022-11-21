import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* width: 100vw; */
  height: 100vh;
  /* margin: 50px auto; */
  background: url("https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Title = styled.h1`
  color: white;
  margin-top: 5rem;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  padding: 2rem;
  width: 44rem;
  height: 22rem;
  background-color: rgba(0.9, 0.9, 0.9, 0.4);
  border: 1px solid white;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  /* background-color: rebeccapurple; */
  /* width: 25rem; */
`;
export const TextWrap = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

export const Lable = styled.div`
  color: white;
  font-weight: 300;
  font-size: 1.6rem;
`;
export const Text = styled.div`
  color: white;
  font-weight: 100;
  font-size: 1.4rem;
  margin-right: 1rem;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-top: 2rem;
`;

export const Button = styled.div`
  width: 4.4rem;
  height: 2.2rem;
  margin: 1rem;
  line-height: 2.2rem;
  background-color: #777;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #333;
  }
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 1rem;
  background: #eee;
  object-fit: fill;
`;
