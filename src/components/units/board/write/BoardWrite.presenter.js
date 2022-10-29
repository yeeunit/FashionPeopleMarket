import { Modal } from "antd";
import Link from "next/link";
import * as A from "./BoardWrite.styles";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function BoardWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>글쓰기</A.Title>
        <A.InputWrap>
          <A.Label>작성자</A.Label>
          <A.Input type="text" onChange={props.onChangeWriter} />
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label>
          <A.Input type="text" onChange={props.onChangePassword} />
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>제목</A.Label>
          <A.Input type="text" onChange={props.onChangeTitle} />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>내용</A.Label>
          <A.Input type="text" onChange={props.onChangeContents} />
        </A.InputWrap>
        <A.InputWrap>
          <A.Label>주소</A.Label>
          <A.Zipcode type="text" />
          <A.AddressBtn onClick={props.showModal}>우편번호 검색</A.AddressBtn>

          {props.isModalVisible && (
            <Modal
              // title="모달 제목"
              visible={props.isModalVisible}
              onOk={props.showModal}
              onCancel={props.showModal}
            >
              <DaumPostcodeEmbed onComplete={props.onCompletePostcode} />
            </Modal>
          )}
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
          <A.RegisterBtn onClick={props.onClickRegister}>
            등록하기
          </A.RegisterBtn>
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
