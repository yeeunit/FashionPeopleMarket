import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log("data: ", data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

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

  const onClickTestBtn = () => {
    Modal.success({ content: "게시글 등록에 성공했습니다!!" });
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickTestBtn={onClickTestBtn}
      />
    </>
  );
}
