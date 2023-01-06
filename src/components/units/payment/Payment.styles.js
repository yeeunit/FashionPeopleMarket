import styled from "@emotion/styled";

export const Background = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 1000vw;
  height: 1000vh;
  background-color: rgba(1, 1, 1, 0.5);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 30rem;
  height: 18rem;
  margin: 16rem 25rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: 1rem;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
`;

export const OptionWrap = styled.div`
  display: flex;
  justify-content: center;
  /* width: 9rem; */
  height: 2rem;
  /* background-color: palegoldenrod; */
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.div`
  margin: 1rem;
  width: 5rem;
  height: 2rem;
  color: white;
  background-color: #444;
  text-align: center;
  line-height: 2rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;
