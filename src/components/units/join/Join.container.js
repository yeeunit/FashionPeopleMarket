import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";

export default function Join() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // const initialInputs = { name: "", email: "", password: "" };
  // const [inputs, setInputs] = useState(initialInputs);

  // const onChangePassword2 = (event) => {
  //   setPassword2(event.target.value);
  // };
  // const onChangeInputs = (event) => {
  //   const _inputs = {
  //     ...inputs,
  //     [event.target.id]: event.target.value,
  //   };
  //   setInputs(_inputs);
  // };

  const onClickSignUp = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입 성공" });
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      Modal.error({ content: error.message });
      // alert(error.message);
    }
  };

  return (
    <>
      <JoinUI
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
}
