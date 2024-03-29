import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const result = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  // console.log("댓글", result);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // console.log("댓글data", data);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = () => {
    deleteBoardComment({
      variables: {
        // boardCommentId,
        password,
      },
    });
  };

  return (
    <>
      <BoardCommentListUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
