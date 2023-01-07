import * as A from "./Main.styles";
import Link from "next/link";
import { useState } from "react";

export default function MainUI(props) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <A.Container>
        <A.Main />

        <A.Middle>
          <A.Title>
            Welcome to <br />
            <div className="FaPe">Fashoin People Market!</div>
          </A.Title>
          {/* <A.Description></A.Description> */}
          <A.Grid>
            <A.Image src="/images/ye1.png" />

            <A.Card>
              <Link href="/join">
                <a>
                  <span>패피마켓</span>에 오신 것을 환영합니다. <br />
                  <br />
                  <div>회원가입 후 더 많은 서비스를 누려보세요!</div>
                </a>
              </Link>
            </A.Card>
          </A.Grid>{" "}
          <A.WeatherBox>
            <Link href="/weather">
              <a>
                ☀️ 현재 날씨 확인하기 <br />
                <span>날씨에 맞는 옷을 구입하세요!</span>
              </a>
            </Link>
          </A.WeatherBox>
          <br /> <br />
          <A.Button isTrue={props.isTrue} onClick={props.handleOnClick}>
            Contact with me
          </A.Button>
        </A.Middle>
        <A.Footer>
          <div>Yeeunit&apos;s project is started.</div>
          <div>Do not miss it!</div>
          {/* <div> */}
          <A.Image
            onClick={handleClick}
            alt="heart"
            src="/images/heart.svg"
            style={{
              width: 20 + 20 * clicks,
              cursor: "pointer",
            }}
          />
          <span>Click This Heart</span>
          {/* </div> */}
        </A.Footer>
      </A.Container>
    </>
  );
}
