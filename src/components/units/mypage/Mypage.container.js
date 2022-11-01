import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FETCH_USER_LOGGEDIN } from "../login/Login.queries";
import MypageUI from "./Mypage.presenter";

export default function Mypage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  console.log("data", data);
  console.log("fetchUserLoggedIn", props.fetchUserLoggedIn);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <MypageUI data={data} fetchUserLoggedIn={props.fetchUserLoggedIn} />
    </>
  );
}
