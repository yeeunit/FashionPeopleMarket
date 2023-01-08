import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
  LIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // console.log("data: ", data);

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log("userData", userData);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickLike = async () => {
    console.log("data", data);
    // if (typeof router.query.boardId !== "string") return;
    // if(router.query.boardId === ) return
    try {
      const result = await likeBoard({
        variables: {
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      // console.log("result", result);
      message.success("좋아요 성공");
    } catch (error) {
      message.error("좋아요 실패");
    }
  };

  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      message.success("싫어요 성공");
    } catch (error) {
      message.error("싫어요 실패");
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      router.push("/boards");
      message.success("삭제 완료");
    } catch (error) {
      message.error("삭제 실패");
    }
  };

  const onClickModifyBtn = () => {
    Modal.success({ content: "수정에 성공했습니다!!" });
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickModifyBtn={onClickModifyBtn}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
      />
    </>
  );
}
