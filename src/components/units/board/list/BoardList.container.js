import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const [isTrue, setIsTrue] = useState(false);

  const handleOnClick = () => {
    setIsTrue((prev) => !prev);
  };

  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log("data: ", data);
  const router = useRouter();

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.boardId}`);
  };

  return (
    <BoardListUI
      isTrue={isTrue}
      handleOnClick={handleOnClick}
      data={data}
      refetch={refetch}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
