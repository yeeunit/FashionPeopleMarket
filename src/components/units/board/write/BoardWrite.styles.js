import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding: 3rem 10%;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const InputWrap = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin: 2rem;
`;

export const Label = styled.div`
  width: 7.7rem;
  height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  /* background-color: pink; */
`;

export const Input = styled.input`
  width: 55rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  /* background-color: yellow; */
`;

export const Zipcode = styled.input`
  width: 8rem;
  height: 2.5rem;
  font-size: 1rem;
  /* border: none; */
  /* border-bottom: 1px solid gray; */
  /* background-color: #eee; */
`;
export const AddressBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: #333;
  margin-left: 1.2rem;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
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
