import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("")

  const [emailError, setEmailError] = useState("");

  const onClickRegister = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
        },
      });
      console.log(result);
      Modal.success({ content: "게시글 등록에 성공했습니다" });
      router.push(`/boards/${result.data.createBoard._id}`);

      console.log(result.data.createBoard.message);
      console.log(result.data.createBoard._id);
    } catch (error) {
      console.log(error.message);
      Modal.error({ content: "등록 실패!!" });
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompletePostcode = (data) => {
    console.log(data);
    setIsModalVisible(false);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
        //
        showModal={showModal}
        isModalVisible={isModalVisible}
        onCompletePostcode={onCompletePostcode}
        onChangeAddress={onChangeAddress}
      />
    </>
  );
}
