import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Modal } from "antd";

const schemaLogin = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "영문 + 숫자 조합 8~16자리의 비밀번호를 입력해주세요"
    )
    .required("비밀번호를 입력해주세요"),
  // passwordRe: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
  //   .required("비밀번호를 다시 입력해주세요"),
  name: yup.string().required("ex)홍길동"),
});

export default function Join() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(schemaLogin),
  //   mode: "onChange",
  // });

  const [createUser] = useMutation(CREATE_USER);

  // const client = useApolloClient();
  const onClickSignUp = async () => {
    // console.log("data", data);
    console.log(name, email, password);
    try {
      const result = await createUser({
        variables: {
          // ...data,
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      console.log("성공결과", result);
      message.success("회원가입에 성공하였습니다! 로그인을 해주세요");
      router.push("/login");
    } catch (error) {
      console.log("실패", error);
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <JoinUI
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onClickSignUp={onClickSignUp}
        onChangePassword={onChangePassword}
        // handleSubmit={handleSubmit}
        // register={register}
        // formState={formState}
      />
    </>
  );
}
