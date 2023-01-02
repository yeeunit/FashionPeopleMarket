import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding: 8rem 7rem;
  /* background-color: cadetblue; */
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
  color: #222;
`;

export const TitleBox = styled.div`
  /* width: 100%; */
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
  margin-bottom: 40px;
  /* border-bottom: 5px solid #555555; */
`;

export const Form = styled.form``;

export const FormItemWrapper = styled.div`
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
  /* background-color: palegoldenrod; */
  div.title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  div.input-box {
    width: 80%;
  }
`;

export const FormItemContentsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 50px;
  div.title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  div.input-box {
    width: 80%;
    margin-right: 2rem;
    /* background-color: cadetblue; */
    /* justify-content: center; */
  }
`;

export const FormMapWrapper = styled.div`
  padding-bottom: 30px;

  div.title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    padding-bottom: 35px;
  }
  div.image-wrapper {
    display: flex;
  }
  div.align-box {
    display: flex;
    justify-content: space-between;
    div.map {
      width: 380px;
      height: 250px;
      background-color: red;
    }
    div.input-align {
      width: 70%;
      div.address-search-align {
        display: flex;
        margin: 20px 0;
      }
      div.input-box {
        margin-bottom: 20px;
      }
    }
  }
`;

export const Input = styled.input`
  width: 50rem;
  height: 50px;
  border: none;
  background-color: #eee;
  padding-left: 30px;
`;

export const AddressInput = styled.input`
  width: 40rem;
  height: 50px;
  border: none;
  background-color: #eee;
  padding-left: 30px;
`;

export const ZipcodeInput = styled.input`
  width: 100px;
  height: 50px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  margin-right: 15px;
  font-size: 16px;
  text-align: center;
  color: #333;
`;

export const AddressButton = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
`;

export const ContentsReactQuill = styled(ReactQuill)`
  width: 50rem;
  /* background-color: aliceblue; */
  div.ql-container {
    height: 400px;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  text-align: center;
  /* border-top: 3px solid #555555; */
  padding-top: 70px;
`;

export const YellowBtn = styled.button`
  width: 10rem;
  height: 3.3rem;
  border-radius: 5px;
  background-color: gold;
  cursor: pointer;
  color: #333;
  text-align: center;
  border: none;
  font-weight: bold;
  margin: 0 15px;
`;

export const BlackBtn = styled.button`
  width: 10rem;
  height: 3.3rem;
  border-radius: 5px;
  background-color: #333;
  cursor: pointer;
  color: white;
  text-align: center;
  border: none;
  font-weight: bold;
  margin: 0 15px;
`;

// export const InputWrap = styled.div`
//   display: flex;
//   /* border: 1px solid red; */
//   margin: 2rem;
// `;

// export const Label = styled.div`
//   width: 12rem;
//   height: 2rem;
//   font-size: 1.2rem;
//   font-weight: bold;
//   /* background-color: pink; */
// `;
// export const InputBox = styled.input`
//   border: 1px solid red;
//   width: 22rem;
// `;

// export const RegisterBtn = styled.button`
//   width: 7rem;
//   height: 3.3rem;
//   border: none;
//   border-radius: 5px;
//   background-color: #555;
//   color: white;

//   cursor: pointer;
// `;
