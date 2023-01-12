import { gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import * as A from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);

  const menuList = ["Board", "Market", "My Page", "Other"];

  // declare const window: typeof globalThis & { IMP: any };

  const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid: ID!) {
      createPointTransactionOfLoading(impUid: $impUid) {
        _id
        amount
      }
    }
  `;

  const onClickPaymant = () => {
    const IMP = window.IMP;

    // const { IMP } = window;

    console.log(IMP);
    IMP?.init("imp49910675");

    IMP?.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        // merchant_uid: ,
        name: "포인트 충전",
        amount: 100,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      async (rsp) => {
        console.log("request_pay", rsp);
        if (rsp.success) {
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert("충전성공");
          location.reload();
        } else {
          alert("결제 실패!!!");
        }
      }
    );
  };
  return (
    <>
      <A.Wrapper>
        <A.LogoMenuWrap>
          <A.Logo>
            <Link href="/">
              <a>
                <A.LogoImg src="/images/ye2.png" alt="logo" />
                YeeunIT
              </a>
            </Link>
          </A.Logo>
          <A.MenuWrap>
            <A.Menu>
              <Link href="/boards">
                <a>Board</a>
              </Link>
            </A.Menu>
            <A.Menu>
              <Link href="/market">
                <a>Market</a>
              </Link>
            </A.Menu>
            <A.Menu>
              <Link href="/mypage">
                <a>My Page</a>
              </Link>
            </A.Menu>
          </A.MenuWrap>
        </A.LogoMenuWrap>

        <A.UserWrap>
          {props.isLogin ? (
            <>
              <A.Login>
                <span>😃 {userInfo?.name}</span> 님 포인트{" "}
                {userInfo?.userPoint ? (
                  `${userInfo.userPoint?.amount}`
                ) : (
                  <span>0</span>
                )}
                P
              </A.Login>
              <A.Login onClick={onClickPaymant}>충전</A.Login>
              <A.Login>
                장바구니{" "}
                <span className="yellow-circle">{props.bucketList.length}</span>
              </A.Login>
              <A.Login onClick={props.onClickLogOut}>로그아웃</A.Login>
            </>
          ) : (
            <>
              <A.Login>
                <Link href="/join">
                  <a>회원가입</a>
                </Link>
              </A.Login>
              <A.Login>
                <Link href="/login">
                  <a>로그인</a>
                </Link>
              </A.Login>
            </>
          )}

          {/* <A.Login onClick={props.onClickLogOut}>
            <Link href="/login">
              <a>로그아웃</a>
            </Link>
          </A.Login> */}
          {/* <A.Login>
            <Link href="/mypage">
              <a>충전</a>
            </Link>
          </A.Login> */}
          {/* <A.Login>
            <Link href="/mypage">
              <a>장바구니</a>
            </Link>
          </A.Login> */}
          {/* <A.Login>Logout</A.Login> */}
        </A.UserWrap>
      </A.Wrapper>
    </>
  );
}
