import Link from "next/link";
import * as A from "./MarketDetail.styles";

export default function MarketDetailUI() {
  return (
    <>
      <A.Wrapper>
        <A.Title>상세보기</A.Title>

        <A.TopWrapper>
          <A.ImageWrapper>
            <A.BigImage />
            <A.SmallImgWrap>
              <A.SmallImage />
              <A.SmallImage />
              <A.SmallImage />
            </A.SmallImgWrap>
          </A.ImageWrapper>
          <A.ContentsWrapper>
            <A.InputWrap>
              <A.Label>제목</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>내용</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>주소</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>유튜브</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>
          </A.ContentsWrapper>
        </A.TopWrapper>

        <A.BtnWrap>
          <A.RegisterBtn>등록하기</A.RegisterBtn>

          <A.CancelBtn>
            <Link href="/boards">
              <a>취소하기</a>
            </Link>
          </A.CancelBtn>
        </A.BtnWrap>
      </A.Wrapper>
    </>
  );
}
