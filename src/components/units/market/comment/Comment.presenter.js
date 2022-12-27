import { CloseOutlined, EditFilled } from "@ant-design/icons";
import { getDate } from "../../../../commons/libraries/utils";
import {
  BtnWrap,
  CancelBtn,
  CommentListBody,
  CommentListHeader,
  CommentListHeaderInfo,
  CommentListItem,
  CommentWrite,
  UpdateBtn,
} from "./Comment.styles";

export default function CommentUI(props) {
  return (
    <CommentListItem>
      {props.isEdit ? (
        <>
          <CommentWrite {...props.register("contents")} />
          <BtnWrap>
            <CancelBtn onClick={props.onClickUpdateCancel}>취소하기</CancelBtn>
            <UpdateBtn
              id={props.el._id}
              onClick={props.handleSubmit(props.onClickUpdate)}
            >
              수정하기
            </UpdateBtn>
          </BtnWrap>
        </>
      ) : (
        <>
          <CommentListHeader>
            <div className="circle"></div>
            <CommentListHeaderInfo>
              <div>
                <p>{props.el.user.name}</p>
                <p>{getDate(props.el.createdAt)}</p>
              </div>
              <div>
                {props.userInfoId === props.el.user._id && (
                  <>
                    <EditFilled onClick={props.onClickChange} />
                    <CloseOutlined
                      id={props.el._id}
                      onClick={props.onClickDelete}
                    />
                  </>
                )}
              </div>
            </CommentListHeaderInfo>
          </CommentListHeader>
          <CommentListBody>
            <p>{props.el.contents}</p>
          </CommentListBody>
        </>
      )}
    </CommentListItem>
  );
}
