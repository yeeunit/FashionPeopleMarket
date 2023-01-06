import Link from "next/link";
import * as A from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  const menuList = ["Board", "Market", "My Page", "Other"];

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
                <span>😃 {props.userInfo?.name}</span> 님 포인트{" "}
                {props.userInfo.userPoint ? (
                  `${props.userInfo.userPoint?.amount}`
                ) : (
                  <span>0</span>
                )}
                P
              </A.Login>
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
