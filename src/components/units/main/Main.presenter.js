import * as A from "./Main.styles";
import Link from "next/link";

export default function MainUI(props) {
  return (
    <>
      <A.Container>
        <A.Main />

        <A.Middle>
          <A.Title>Welcome to Yeeun&apos;s project!</A.Title>
          <A.Description></A.Description>
          <A.Grid>
            <A.Image src="/images/ye1.png" />
            <A.Card>
              <Link href="/login">
                <a>
                  <div>로그인 하기 &rarr;</div>
                  <span>로그인해서 더 많은 서비스를 누려보세요!</span>
                </a>
              </Link>
            </A.Card>
          </A.Grid>{" "}
          <br /> <br />
          <A.Button isTrue={props.isTrue} onClick={props.handleOnClick}>
            Contact with me
          </A.Button>
        </A.Middle>
        <A.Footer>
          Yeeunit&apos;s project is started.
          <br /> Do not miss it!
        </A.Footer>
      </A.Container>
    </>
  );
}
