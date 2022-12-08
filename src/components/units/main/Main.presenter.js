import * as A from "./Main.styles";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LayoutFooter from "../../../components/commons/layout/footer/LayoutFooter.container";
import Crsl from "../carousel/Carousel.presenter";
import MainPageQuestionPresenter from "../../commons/mainPageQuestion/mainPageQuestion.presenter";

export default function MainUI(props) {
  return (
    <>
      <A.Container>
        {/* <A.Title>Yeeun&apos;s Project</A.Title> */}

        <A.Main></A.Main>

        <A.Middle>
          <A.Title>Welcome to Yeeun&apos;s project!</A.Title>
          <A.Description>
            {/* <h2>예니의 페이지에 오신 것을 환영합니다!</h2> */}
          </A.Description>
          <A.Grid>
            <A.Image src="/images/ye1.png" />
            <A.Card>
              <Link href="/login">
                <a>
                  <h2>로그인 하기 &rarr;</h2>
                  <p>로그인해서 더 많은 서비스를 누려보세요!</p>
                </a>
              </Link>
            </A.Card>
          </A.Grid>{" "}
          <br /> <br />
          {/* <button>버튼</button> */}
          <A.Button isTrue={props.isTrue} onClick={props.handleOnClick}>
            Contact with me
          </A.Button>
        </A.Middle>

        <A.Footer>
          Yeeunit&apos;s project is started.
          <br /> Do not miss it!
        </A.Footer>

        {/* <LayoutFooter /> */}
      </A.Container>
    </>
  );
}
