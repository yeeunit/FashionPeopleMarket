import * as A from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      {/* <A.Wrapper> */}
      <div>
        {/* 아바타 작성자 별점 닉네임 작성일 내용 */}
        {props.data?.fetchBoardComments.map((el) => (
          <A.ItemWrapper key={el._id}>
            <A.FlexWrapper>
              <A.Avatar src="/images/avatar.png" />
              <A.MainWrapper>
                <A.WriterWrapper>
                  <A.Writer>{el.writer}</A.Writer>
                </A.WriterWrapper>
                <A.Contents>{el.contents}</A.Contents>
              </A.MainWrapper>
              <A.OptionWrapper>
                <A.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                <A.DeleteIcon
                // id={el._id}
                // src="/images/boardComment/list/option_delete_icon.png/"
                // onClick={props.onClickDelete}
                />
              </A.OptionWrapper>
            </A.FlexWrapper>
            {/* <A.DateString>{getDate(el?.createdAt)}</A.DateString> */}
          </A.ItemWrapper>
        ))}
      </div>
      {/* </A.Wrapper> */}
    </>
  );
}
