import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { message, Modal } from "antd";
import { useRecoilState } from "recoil";
import { isBucketActiveState, isLoginStatus } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "./LayoutHeader.queries";

export default function LayoutHeader(props) {
  const router = useRouter();
  const client = useApolloClient();

  const [isLogin, setIsLogin] = useRecoilState(isLoginStatus);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [bucketIsActive, setBucketIsActive] =
    useRecoilState(isBucketActiveState);
  const [bucketList, setBucketList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log("logged", data);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    } else if (!localStorage.getItem("accessToken")) {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("bucketList") || "[]");
    setBucketList(result);
  }, [bucketIsActive]);

  const onClickMove = (url) => (event) => {
    router.push(`${url}`);
  };

  const onClickLogOut = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      setIsLogin(false);
      router.push("/");
      message.success("로그아웃 성공!!");
    } catch (error) {
      message.error("로그아웃 실패!!");
    }
  };

  return (
    <>
      <LayoutHeaderUI
        isBtnActive={isBtnActive}
        bucketList={bucketList}
        isLogin={isLogin}
        userInfo={userInfo}
        isBlack={props.isBlack}
        onClickMove={onClickMove}
        onClickLogOut={onClickLogOut}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
