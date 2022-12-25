import * as A from "./BoardCommentList.styles";

import { EditIcon, AccountCircleIcon, ClearIcon } from "@mui/icons-material";

// import EditIcon from "@mui/icons-material/Edit";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ClearIcon from "@mui/icons-material/Clear";
export default function BoardCommentListUI(props) {
  return (
    <>
      {/* <A.Wrapper> */}
      <div>
        {/* 아바타 작성자 별점 닉네임 작성일 내용 */}
        {props.data?.fetchBoardComments.map((el) => (
          <A.ItemWrapper key={el._id}>
            <A.FlexWrapper>
              <AccountCircleIcon fontSize="large" color="action" />
              <A.MainWrapper>
                <A.WriterWrapper>
                  <A.Writer>{el.writer}</A.Writer>
                </A.WriterWrapper>
                <A.Contents>{el.contents}</A.Contents>
              </A.MainWrapper>
              <A.OptionWrapper>
                <A.Update>
                  {" "}
                  <EditIcon color="action" />{" "}
                </A.Update>
                <A.Delete>
                  <ClearIcon color="action" onClick={props.onClickDelete} />{" "}
                </A.Delete>
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
