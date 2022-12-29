import * as A from "./LayoutFooter.styles";
import TopButton from "../../topButton/index";

export default function LayoutFooterUI() {
  return (
    <>
      <A.Footer>
        <div>
          {/* <A.Star /> */}
          <A.FooterText>Who Is Yeeun?</A.FooterText>
          <A.FooterText>What is Yeeunit.site</A.FooterText>
          <A.FooterText>Contact with me</A.FooterText>
          <A.FooterText>(000) 1234 - 56789</A.FooterText>
        </div>
        <A.FooterText2>
          평일 09:00~18:00 | 점심시간 12:00~13:00 | 주말 및 공휴일 휴무
          <br /> <br />
          (주)YeeunIT Made by yeeunit22.
          <br /> © 2022 YEEUNUT by Yeeun CHUNG |
        </A.FooterText2>
        <TopButton />
      </A.Footer>

      <A.Wrapper>Created by Yeeun</A.Wrapper>
    </>
  );
}
