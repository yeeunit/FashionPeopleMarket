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

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);

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
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
