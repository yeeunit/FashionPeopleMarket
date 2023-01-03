import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import * as A from "./BoardDetail.styles";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { PersonIcon, WatchLaterIcon } from "@mui/icons-material";

import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.containter";
import BoardCommentList from "../../boardComment/list/BoardCommentList.containter";

export default function BoardDetailUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>상세보기</A.Title>

        <A.TitleWrapper>
          <A.TitleBox> ★ 제목 {props.data?.fetchBoard?.title}</A.TitleBox>{" "}
          <A.Date>
            {/* <PersonIcon /> {props.data?.fetchBoard?.writer} &nbsp; &nbsp; &nbsp; */}
            {/* &nbsp; <WatchLaterIcon />{" "} */}
            {getDate(props.data?.fetchBoard?.createdAt)}
          </A.Date>
        </A.TitleWrapper>

        <A.TopWrapper>
          <A.ImageWrapper>
            {props.data ? (
              <A.BigImage src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            ) : (
              // <A.BigImage src={`${props.data?.fetchBoard?.images[0]}`} />
              <A.BigImage src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            )}

            <A.SmallImgWrap>
              {props.data?.fetchBoard?.images.map((el, index) =>
                props.data?.fetchBoard?.images[index] ? (
                  <A.SmallImage key={el._id} id={el._id} src={`${el[index]}`} />
                ) : (
                  <A.SmallImage src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                )
              )}
            </A.SmallImgWrap>
          </A.ImageWrapper>

          <A.ContentsWrapper>
            <A.DateWrap>
              <A.Date>수정일 : {props.data?.fetchBoard?.updatedAt}</A.Date>
            </A.DateWrap>

            <A.InputWrap style={{ height: "10rem" }}>
              <A.Label>내용</A.Label>
              <A.TextBox>
                {props.data?.fetchBoard?.contents}
                <br />
                <span>
                  부드러우면서도 깔끔한 인상을 주는 엑스트라 화인 메리노 크루넥
                  스웨터입니다. <br />
                  · 세탁기로 간편히 세탁이 가능한 머신워셔블 기능.(물세탁,
                  세탁기 사용 가능)
                  <br />· 다양한 코디가 가능한 아이템. <br />· 크루넥 타입.
                </span>
              </A.TextBox>
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
              <A.TextBox>
                <LikeOutlined />
                &nbsp;
                {props.data?.fetchBoard?.likeCount}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </A.TextBox>
              <A.TextBox>
                <DislikeOutlined />
                &nbsp;
                {props.data?.fetchBoard?.dislikeCount}
              </A.TextBox>
            </A.LikeBox>
          </A.ContentsWrapper>
        </A.TopWrapper>
        <A.BtnWrap>
          <A.RegisterBtn onClick={props.onClickModifyBtn}>
            수정하기
          </A.RegisterBtn>
          <A.RegisterBtn onClick={props.onClickDelete}>삭제하기</A.RegisterBtn>

          <A.CancelBtn>
            <Link href="/boards">
              <a>목록으로</a>
            </Link>
          </A.CancelBtn>
        </A.BtnWrap>
        <BoardCommentWrite />
        <BoardCommentList />
      </A.Wrapper>
    </>
  );
}
