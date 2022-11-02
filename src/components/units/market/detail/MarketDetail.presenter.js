import Link from "next/link";
import * as A from "./MarketDetail.styles";
import Dompurify from "dompurify";

export default function MarketDetailUI(props) {
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
              <A.Label>상품명</A.Label>
              <A.TextBox>{props.data?.props.data.fetchUseditem.name}</A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>한줄 설명</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>내용</A.Label>
              <A.TextBox> </A.TextBox>
              {typeof window !== "undefined" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
                  }}
                ></div>
              )}
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>가격</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>태그</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>이미지</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>주소</A.Label>
              <A.TextBox></A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>판매자</A.Label>
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
