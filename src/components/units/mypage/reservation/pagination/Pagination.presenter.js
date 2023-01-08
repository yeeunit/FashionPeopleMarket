import * as S from "./Pagination.styles";

export default function PaginationUI(props) {
  return (
    <>
      <S.PageWrapper>
        <S.SlideButton
          isActive={props.isActive ? true : props.isActive}
          onClick={props.onClickPrevPage}
        >{`<`}</S.SlideButton>
        {new Array(5).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.PageButton
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                isActive={props.startPage + Number(index) === props.currentPage}
              >
                {index + props.startPage}
              </S.PageButton>
            )
        )}
        <S.SlideButton
          isActive={props.isActive ? true : props.isActive}
          onClick={props.onClickNextPage}
        >{`>`}</S.SlideButton>
      </S.PageWrapper>
    </>
  );
}
