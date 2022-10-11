import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("")

  const [emailError, setEmailError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  const onClickRegister = async () => {
    // console.log(email);

    // if (email.includes("@") === false) {
    //   setEmailError("이메일이 올바르지 않습니다.");
    // } else {
    //   alert("회원가입 완료");
    // }

    const result = await createBoard({
      variables: {
        writer: "라이터",
        title: "타이틀",
        contents: "콘텐츠",
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
      />
    </>
  );
}
