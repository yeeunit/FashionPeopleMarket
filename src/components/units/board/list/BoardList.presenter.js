import { Link } from "@material-ui/core";
import * as A from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardListUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>Board LIST</A.Title>
        <A.ColorChange isTrue={props.isTrue} onClick={props.handleOnClick}>
          클릭하면 색변경!
        </A.ColorChange>
        <A.SearchBarWrap>
          <A.SearchBar type="text" placeholder="검색어를 입력해 주세요" />
        </A.SearchBarWrap>

        <A.ListWrap>
          <A.TableTop />
          <A.RowHeader>
            <A.ColumnTitle>글쓴이</A.ColumnTitle>
            <A.ColumnTitle>제목</A.ColumnTitle>
            <A.ColumnTitle>내용</A.ColumnTitle>
            <A.ColumnTitle>작성일</A.ColumnTitle>
            <A.ColumnTitle>좋아요</A.ColumnTitle>
          </A.RowHeader>

          {props.data?.fetchBoards.map((el) => (
            <A.RowBody
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              <A.ColumnText>{el.writer}</A.ColumnText>
              <A.ColumnText>{el.title}</A.ColumnText>
              <A.ColumnText>{el.contents}</A.ColumnText>
              <A.ColumnText> {getDate(el.createdAt)}</A.ColumnText>
              <A.ColumnText>{el.likeCount}</A.ColumnText>
            </A.RowBody>
          ))}

          <A.TableBottom />
        </A.ListWrap>

        <A.BottomWrap>
          <A.WriteBtn>
            <Link href="/boards/new">
              <a>글쓰기</a>
            </Link>
          </A.WriteBtn>
        </A.BottomWrap>
      </A.Wrapper>
    </>
  );
}
