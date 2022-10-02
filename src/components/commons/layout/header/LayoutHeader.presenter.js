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
              <a>Join</a>
            </Link>
          </A.Login>
          <A.Login>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </A.Login>
          {/* <A.Login>Logout</A.Login> */}
        </A.LoginWrap>
      </A.Wrapper>
    </>
  );
}
