import { Link } from "@material-ui/core";
import * as A from "./BoardList.styles";

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
            <A.ColumnTitle>작성자</A.ColumnTitle>
            <A.ColumnTitle>제목</A.ColumnTitle>
            <A.ColumnTitle>내용</A.ColumnTitle>
            <A.ColumnTitle>날짜</A.ColumnTitle>
          </A.RowHeader>

          <A.RowBody>
            <A.ColumnText>1</A.ColumnText>
            <A.ColumnText>2</A.ColumnText>
            <A.ColumnText>3</A.ColumnText>
            <A.ColumnText>4</A.ColumnText>
          </A.RowBody>
          <A.RowBody>
            <A.ColumnText>1</A.ColumnText>
            <A.ColumnText>2</A.ColumnText>
            <A.ColumnText>3</A.ColumnText>
            <A.ColumnText>4</A.ColumnText>
          </A.RowBody>
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
