import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../src/commons/store";
import LoginWriteUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { Modal } from "antd";

export default function LoginWrite() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(FETCH_USER_LOGGED_IN);
  console.log("login", data);

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });

      if (email.includes("@") === false) {
        setEmailError("이메일 아이디를 @까지 정확하게 입력해주세요");
      }

      if (!password) {
        setPasswordError("영문+숫자 조합 8-16자리의 비밀번호를 입력해주세요.");
      }

      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (!accessToken) {
        alert("로그인 실패");
        return;
      }
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      setAccessToken(accessToken);
      setUserInfo(userInfo);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // message.success(`${data?.fetchUserLoggedIn.name}님 환영합니다!`);
      router.push("/market");
    } catch (error) {
      console.log("실패", error);
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginWriteUI
        emailError={emailError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
