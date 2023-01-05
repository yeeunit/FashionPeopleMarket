import { useApolloClient, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useRecoilState } from "recoil";
import { isBucketActiveState, isLoginStatus } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  LOGOUT_USER,
} from "./LayoutHeader.queries";

export default function LayoutHeader(props) {
  const router = useRouter();
  const client = useApolloClient();

  const [isLogin, setIsLogin] = useRecoilState(isLoginStatus);
  const [isPointOpen, setIsPointOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [bucketIsActive, setBucketIsActive] =
    useRecoilState(isBucketActiveState);
  const [bucketList, setBucketList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

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

  const onChangePointPrice = () => {
    setIsBtnActive(true);
  };

  const onClickPointSubmit = (data) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트충전",
        amount: data.price,
        buyer_email: "xxx@gmail.com",
        buyer_name: "ㅇㅇㅇ",
        buyer_tel: "010-000-0000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      async (rsp) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          setIsPointOpen(false);
          message.success("결제에 성공하셨습니다");
        } else {
          // 결제 실패 시 로직,
          message.error("결제에 실패했습니다!! 다시 시도해 주세요");
        }
      }
    );
  };

  const onClickOpenPointModal = () => {
    setIsPointOpen(true);
  };

  const onClickClosePointModal = () => {
    setIsPointOpen(false);
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <LayoutHeaderUI
        isPointOpen={isPointOpen}
        isBtnActive={isBtnActive}
        bucketList={bucketList}
        isLogin={isLogin}
        userInfo={userInfo}
        isBlack={props.isBlack}
        onClickMove={onClickMove}
        onClickLogOut={onClickLogOut}
        onClickOpenPointModal={onClickOpenPointModal}
        onClickClosePointModal={onClickClosePointModal}
        onChangePointPrice={onChangePointPrice}
        onClickPointSubmit={onClickPointSubmit}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
