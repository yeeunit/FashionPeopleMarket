import { Modal } from "antd";
import Link from "next/link";
import * as A from "./BoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import DaumPostcodeEmbed from "react-daum-postcode";
import Upload01 from "../../../commons/uploads/01/Upload.container";

export default function BoardWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>글쓰기</A.Title>

        <form onSubmit={props.handleSubmit(props.onClickRegister)}>
          <A.InputWrap>
            <A.Label>작성자</A.Label>
            <A.Input
              // id="writer"
              type="text"
              placeholder="이름을 적어주세요."
              {...props.register("writer")}
              // onChange={props.onChangeInputs}
            />
          </A.InputWrap>

          <A.InputWrap>
            <A.Label>비밀번호</A.Label>
            <A.Input
              // id="password"
              type="password"
              placeholder="비밀번호를 작성해주세요."
              {...props.register("password")}
              // onChange={props.onChangeInputs}
            />
          </A.InputWrap>

          <A.InputWrap>
            <A.Label>제목</A.Label>
            <A.Input
              // id="title"
              type="text"
              placeholder="제목을 작성해주세요."
              {...props.register("title")}
              // onChange={props.onChangeInputs}
            />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>내용</A.Label>
            <A.Input
              // id="contents"
              type="text"
              placeholder="내용을 작성해 주세요"
              {...props.register("contents")}
              // onChange={props.onChangeInputs}
            />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>주소</A.Label>
            <A.Zipcode
              placeholder="00000"
              readOnly
              // value={props.zipcode || ""}
              {...props.register("zipcode")}
            />
            <A.AddressBtn type="button" onClick={props.onClickAddressSearch}>
              우편번호 검색
            </A.AddressBtn>

            {props.isOpen && (
              <Modal visible={true}>
                <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
              </Modal>
            )}
          </A.InputWrap>
          <A.InputWrap>
            <A.Label></A.Label>
            <A.Input readOnly type="text" {...props.register("address")} />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label></A.Label>
            <A.Input
              type="text"
              placeholder="상세주소를 적어주세요"
              {...props.register("addressDetail")}
            />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>유튜브</A.Label>
            <A.Input
              placeholder="링크를 복사해주세요."
              type="text"
              {...props.register("youtubeUrl")}
              // defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
            />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>사진 첨부</A.Label>

            {/* <A.ImageWrap>
              {props.fileUrls.map((el, index) => (
                <Upload01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </A.ImageWrap> */}
          </A.InputWrap>

          <A.BtnWrap>
            <A.RegisterBtn type="submit">
              {/* <A.RegisterBtn onClick={props.onClickRegister}> */}
              등록하기
            </A.RegisterBtn>
            <A.CancelBtn>
              <Link href="/boards">
                <a>취소하기</a>
              </Link>
            </A.CancelBtn>
          </A.BtnWrap>
        </form>
      </A.Wrapper>
    </>
  );
}
