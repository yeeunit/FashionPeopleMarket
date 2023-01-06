import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FETCH_USER_LOGGED_IN } from "../login/Login.queries";
import MypageUI from "./Mypage.presenter";
import { message, Modal } from "antd";

export default function Mypage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // console.log("data", data);
  // console.log("fetchUserLoggedIn", props.fetchUserLoggedIn);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.error("로그인 후 이용 가능합니다.");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <MypageUI data={data} fetchUserLoggedIn={props.fetchUserLoggedIn} />
    </>
  );
}
