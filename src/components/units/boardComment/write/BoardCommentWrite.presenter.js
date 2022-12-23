import * as A from "./BoardCommentWrite.styles";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>댓글</A.Title>
        <A.WriterWrap>
          <A.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <A.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />

          <A.Star>
            <Rate onChange={props.setStar} />
          </A.Star>
        </A.WriterWrap>
        <A.Comment
          type="text"
          placeholder="개인정보를 공유 및 요청하거나,
      명예, 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며,
      이에대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        />
        <A.ButtonBox>
          <A.Numbers>0/100</A.Numbers>
          <A.Button onClick={props.onClickSubmitComment}>
            댓글 등록하기
          </A.Button>
        </A.ButtonBox>
      </A.Wrapper>
    </>
  );
}
