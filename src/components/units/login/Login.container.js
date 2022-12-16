import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import LoginWriteUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function LoginWrite() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    console.log(event.target);
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    console.log("email", email);
    console.log("password", password);

    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);

    if (!email.includes("@")) {
      // alert("이메일이 올바르지 않습니다!! @가 없음!!")
      // document.getElementById("qqq").innerText = "이메일이 올바르지 않습니다!! @가 없음!!"
      setEmailError("이메일 주소를 정확하게 입력해주세요");
    }

    if (!accessToken) {
      alert("로그인 실패");
      return;
    }

    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    alert("로그인 성공");
    router.push("/");
  };

  return (
    <>
      <LoginWriteUI
        emailError={emailError}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
