import * as A from "./LayoutFooter.styles";
export default function LayoutFooterUI() {
  return (
    <>
      <A.Footer>
        <div>
          <A.FooterText>Yeeun 소개</A.FooterText>
          <A.FooterText>Yeeun.site</A.FooterText>
          <A.FooterText>Contact with me</A.FooterText>
          <A.FooterText>(000) 0000 - 0000</A.FooterText>
        </div>
        <A.FooterText2>
          평일 10:00~17:00 | 점심시간 12:30~14:00 주말 및 공휴일 휴무
          <br /> <br />
          (주)YeeunIT Made by yeeunit22.
          <br /> © 2022 YEEUNUT by Yeeun CHUNG |
        </A.FooterText2>
      </A.Footer>

      <A.Wrapper>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Yeeun 😃{" "}
        </a>
      </A.Wrapper>
    </>
  );
}
