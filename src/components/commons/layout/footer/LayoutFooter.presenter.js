import * as A from "./LayoutFooter.styles";
import MainPageQuestionPresenter from "../../../commons/mainPageQuestion/mainPageQuestion.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function LayoutFooterUI() {
  return (
    <>
      <MainPageQuestionPresenter />

      <A.Footer>
        <div>
          {/* <FontAwesomeIcon
            icon={faHeart}
            style={{
              fontSize: "2.5em",
              color: "#E53935",
              cursor: "pointer",
            }}
          /> */}
        </div>

        <div>
          {/* <A.Star /> */}
          <A.FooterText>Who Is Yeeun?</A.FooterText>
          <A.FooterText>Yeeunit.site</A.FooterText>
          <A.FooterText>Contact with me</A.FooterText>
          <A.FooterText>(000) 1234 - 56789</A.FooterText>
        </div>
        <A.FooterText2>
          평일 09:00~18:00 | 점심시간 12:00~13:00 | 주말 및 공휴일 휴무
          <br /> <br />
          (주)YeeunIT Made by yeeunit22.
          <br /> © 2022 YEEUNUT by Yeeun CHUNG |
        </A.FooterText2>
      </A.Footer>

      <A.Wrapper>Created by Yeeun</A.Wrapper>
    </>
  );
}
