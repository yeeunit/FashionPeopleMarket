import Link from "next/link";
import * as A from "./BoardWrite.styles";

export default function BoardWriteUI() {
  return (
    <>
      <A.Wrapper>
        <A.Title>글쓰기</A.Title>
        <A.InputWrap>
          <A.Label>제목</A.Label>
          <A.Input type="text" />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>내용</A.Label>
          <A.Input type="text" />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>주소</A.Label>
          <A.Zipcode type="text" />
          <A.AddressBtn>우편번호 검색</A.AddressBtn>
        </A.InputWrap>
        <A.InputWrap>
          <A.Label></A.Label>
          <A.Input type="text" />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>유튜브</A.Label>
          <A.Input type="text" />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>사진 첨부</A.Label>
          <A.Input type="text" />
        </A.InputWrap>

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
