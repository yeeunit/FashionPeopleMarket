import Link from "next/link";
import * as A from "./LayoutHeader.styles";
export default function LayoutHeaderUI() {
  return (
    <>
      <A.Wrapper>
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
          <A.Menu>Market</A.Menu>
          <A.Menu>
            {/* <Link href="/">My Page</Link>  */}
            <a>My Page</a>
          </A.Menu>
        </A.MenuWrap>

        <A.LoginWrap>
          <A.Login>Join</A.Login>
          <A.Login>Login</A.Login>
          {/* <A.Login>Logout</A.Login> */}
        </A.LoginWrap>
      </A.Wrapper>
    </>
  );
}
