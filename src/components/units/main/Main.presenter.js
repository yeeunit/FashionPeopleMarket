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
              <Link href="/weather">
                <a>
                  <div>☀️현재 날씨 확인하기 &rarr;</div>
                  <span>날씨에 맞는 옷을 구입하세요!</span>
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
