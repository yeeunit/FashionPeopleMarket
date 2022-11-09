import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";

export default function Join() {
  const initialInputs = { name: "", email: "", password: "" };
  const [inputs, setInputs] = useState(initialInputs);

  const [createUser] = useMutation(CREATE_USER);

  const onChangePassword2 = (event) => {
    setPassword2(event.target.value);
  };
  const onChangeInputs = (event) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
  };

  const onClickSignUp = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: { ...inputs },
        },
      });
      onChangePassword2(), console.log(result);
      Modal.success({ content: "회원가입 성공" });
    } catch (error) {
      console.log(error.message);
      Modal.error({ content: error.message });
      // alert(error.message);
    }
  };

  return (
    <>
      <JoinUI onChangeInputs={onChangeInputs} onClickSignUp={onClickSignUp} />
    </>
  );
}
