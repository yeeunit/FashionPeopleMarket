import { Link } from "@material-ui/core";
import * as A from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>자유게시판</A.Title>

        <A.SearchBarWrap>
          <A.SearchBar
            type="text"
            placeholder="제목을 검색 해주세요"
            onChange={props.onChangeSearch}
          />
          {/* <A.SearchBtn onClick={props.onClickSearch}>검색</A.SearchBtn> */}
        </A.SearchBarWrap>

        <A.ListWrap>
          <A.TableTop />
          <A.RowHeader>
            <A.Column>글쓴이</A.Column>
            <A.ColumnTitle>제목</A.ColumnTitle>
            {/* <A.ColumnTitle>내용</A.ColumnTitle> */}
            <A.ColumnDate>작성일</A.ColumnDate>
            <A.ColumnLike>좋아요</A.ColumnLike>
          </A.RowHeader>

          {props.data?.fetchBoards.map((el) => (
            <A.RowBody
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              <A.Column>{el.writer}</A.Column>
              <A.ColumnTitle>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <span
                      key={uuidv4()}
                      style={{ color: props.keyword === el ? "red" : "black" }}
                    >
                      {el}
                    </span>
                  ))}
              </A.ColumnTitle>
              {/* <A.ColumnText>{el.contents}</A.ColumnText> */}
              <A.ColumnDate> {getDate(el.createdAt)}</A.ColumnDate>
              <A.ColumnLike>{el.likeCount}</A.ColumnLike>
            </A.RowBody>
          ))}

          <A.TableBottom />
        </A.ListWrap>

        <A.Pagination>
          <span onClick={props.onClickPrevPage}>&lt;</span>
          {new Array(10).fill(1).map((_, index) => (
            <span
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
            >
              {index + props.startPage}
            </span>
          ))}
          <span onClick={props.onClickNextPage}>&gt;</span>
        </A.Pagination>

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
