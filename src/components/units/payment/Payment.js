import { gql, useMutation } from "@apollo/client";
import { message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PointPage from "../../../../pages/mypage/point";
import * as A from "./Payment.styles";

// declare const window: typeof globalThis & {IMP}

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      statusDetail
    }
  }
`;

export default function Payment(props) {
  const router = useRouter();
  const [isPointOpen, setIsPointOpen] = useState(false);

  const [price, setPrice] = useState(100);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangePointPrice = () => {
    setIsBtnActive(true);
  };

  const onClickOpenPointModal = () => {
    setIsPointOpen(true);
  };

  const onClickClosePointModal = () => {
    setIsPointOpen(false);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickClose = () => {
    return <Payment isTrue={false} />;
  };

  const onClickPayment = (data) => {
    // const IMP = window.IMP;
    const { IMP } = window;
    console.log(IMP);
    // IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주문번호, 중복 안됨. 없애면 자동 생성
        name: "포인트 충전",
        amount: data.price,
        buyer_email: "xxx@000.com",
        buyer_name: "xxx",
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 영등포구",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/boards/payment",
        // 모바일
      },
      async (rsp) => {
        if (rsp.success) {
          console.log(rsp);

          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          setIsPointOpen(false);
          message.success("결제 성공");

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // const paymentDate = new Date();
          // ex, createPointTransactionOfLoading
          // router.push("/payment.success.tsx");
        } else {
          // 결제 실패 시 로직,
          message.error("결제에 실패했습니다.");
        }
      }
    );
  };

  return (
    <>
      <A.Background>
        <A.Wrapper>
          <A.Title>포인트 충전하기</A.Title>
          <br />

          <div>
            <Head>
              <script
                type="text/javascript"
                src="https://code.jquery.com/jquery-1.12.4.min.js"
              ></script>

              <script
                type="text/javascript"
                src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
              ></script>
            </Head>

            <A.OptionWrap>
              <select onChange={onChangePrice}>
                {/* <select name = 'price' value={optionsState}> */}
                <option value={100}> 100원 </option>
                <option value={500}> 500원 </option>
                <option value={1000}> 1000원 </option>
                <option value={2000}> 2000원 </option>
              </select>
            </A.OptionWrap>
            <br />
            <A.BtnWrap>
              <A.Button onClick={onClickPayment}>결제하기</A.Button>
              <A.Button>
                {/* <Link href="/mypage"> 닫기</Link> */}
                <div onClick={onClickClose}> 닫기</div>
              </A.Button>
            </A.BtnWrap>
          </div>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
