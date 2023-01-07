import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../login/Login.queries";
import MypageUI from "./Mypage.presenter";
import { message, Modal } from "antd";
import Payment from "../payment/Payment";

export default function Mypage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isTrue, setIsTrue] = useState(false);

  // console.log("data", data);
  // console.log("fetchUserLoggedIn", props.fetchUserLoggedIn);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.error("로그인 후 이용 가능합니다.");
      router.push("/login");
    }
  }, []);

  const onClickPoint = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <MypageUI
        data={data}
        fetchUserLoggedIn={props.fetchUserLoggedIn}
        isTrue={isTrue}
        onClickPoint={onClickPoint}
      />
    </>
  );
}
