import Link from "next/link";
import * as A from "./LayoutHeader.styles";
export default function LayoutHeaderUI() {
  return (
    <>
      <A.Wrapper>
        <A.LogoMenuWrap>
          <A.Logo>
            <Link href="/">
              <a>LOGO</a>
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

        <A.LoginWrap>
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
          <A.Login>
            <Link href="/login">
              <a>로그아웃</a>
            </Link>
          </A.Login>
          <A.Login>
            <Link href="/login">
              <a>충전</a>
            </Link>
          </A.Login>
          <A.Login>
            <Link href="/login">
              <a>장바구니</a>
            </Link>
          </A.Login>
          {/* <A.Login>Logout</A.Login> */}
        </A.LoginWrap>
      </A.Wrapper>
    </>
  );
}
