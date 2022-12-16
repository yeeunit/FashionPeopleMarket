import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import * as A from "./BoardDetail.styles";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>상세보기</A.Title>
        <A.TopWrapper>
          <A.ImageWrapper>
            <A.BigImage src={`${props.data?.fetchBoard?.images[0]}`} />
            <A.SmallImgWrap>
              <A.SmallImage />
              <A.SmallImage />
              <A.SmallImage />
            </A.SmallImgWrap>
          </A.ImageWrapper>

          <A.ContentsWrapper>
            <A.DateWrap>
              <A.Date>
                작성일 : {getDate(props.data?.fetchBoard?.createdAt)}
              </A.Date>
              {/* <A.Date>수정일 : {props.data?.fetchBoard?.updatedAt}</A.Date> */}
            </A.DateWrap>
            <A.InputWrap>
              <A.Label>제목</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.title}</A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>작성자</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.writer}</A.TextBox>
            </A.InputWrap>
            <A.InputWrap>
              <A.Label>내용</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.contents}</A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>주소</A.Label>
              <A.TextBox>
                {props.data?.fetchBoard?.address}
                {props.data?.fetchBoard?.addressDetail}
              </A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>유튜브</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.youtubeUrl}</A.TextBox>
              {/* <ReactPlayer url="https://www.youtube.com/watch?v=hnanNlDbsE4"></ReactPlayer> */}
            </A.InputWrap>
            <A.LikeBox>
              <A.TextBox>좋아요{props.data?.fetchBoard?.likeCount}</A.TextBox>
              <A.TextBox>
                싫어요{props.data?.fetchBoard?.dislikeCount}
              </A.TextBox>
            </A.LikeBox>
          </A.ContentsWrapper>
        </A.TopWrapper>
        <A.BtnWrap>
          <A.RegisterBtn>수정하기</A.RegisterBtn>
          <A.RegisterBtn onClick={props.onClickDelete}>삭제하기</A.RegisterBtn>

          <A.CancelBtn>
            <Link href="/boards">
              <a>목록으로</a>
            </Link>
          </A.CancelBtn>
        </A.BtnWrap>
        <button onClick={props.onClickTestBtn}>test1</button>
      </A.Wrapper>
    </>
  );
}
