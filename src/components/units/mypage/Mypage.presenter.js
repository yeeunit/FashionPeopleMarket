import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as A from "./Mypage.styles";

// logo@gmail.com / logo@333

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
      createdAt
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function MypageUI(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    // console.log(event);
    // console.log(event.target.value);

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

  const onClickRegister = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
    });
    // console.log("result", result);
    // console.log(result.data.writer);

    console.log(result.data.createBoard.message);
    // console.log(writer, contents, password, title);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });
  console.log("data", data);

  return (
    <>
      <A.Wrapper>
        <A.LeftWrap>
          <A.Profile></A.Profile>
          <A.Name>Lady GaGa</A.Name>
          <A.Tabs>회원정보 수정</A.Tabs>
          <A.Tabs>내가 쓴 글</A.Tabs>
          <A.Tabs>찜 목록</A.Tabs>
          <A.Tabs>내 포인트</A.Tabs>
        </A.LeftWrap>
        <A.RightWrap>
          <A.Title>My page</A.Title>
          <div>연습</div>
          writer <input type="text" onChange={onChangeWriter} />
          password
          <input type="password" onChange={onChangePassword} />
          title
          <input type="text" onChange={onChangeTitle} />
          contents
          <input type="text" onChange={onChangeContents} />
          <button onClick={onClickRegister}>클릭</button>
        </A.RightWrap>
        {/* <A.TopWrapper>
          <A.box1>
            <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>;
          </A.box1>
          <A.box2></A.box2>
          <A.box3></A.box3>
        </A.TopWrapper>
        <A.bar></A.bar> */}
      </A.Wrapper>
    </>
  );
}
