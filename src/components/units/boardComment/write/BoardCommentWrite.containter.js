import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState();
  const [password, setPassword] = useState();
  const [contents, setContents] = useState();
  const [star, setStar] = useState();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmitComment = async () => {
    console.log(writer, password, contents);
    if (!contents) return;

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log("댓글성공", result);
      Modal.success({ title: "등록 완료" });
    } catch (error) {
      console.log("댓글 실패");
      Modal.error({ title: "등록 실패" });
      // alert("등록완료");
    }
    setWriter("");
    setPassword("");
    setContents("");
  };

  return (
    <>
      <BoardCommentWriteUI
        setStar={setStar}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickSubmitComment={onClickSubmitComment}
      />
    </>
  );
}
