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
  // console.log("data: ", data);
  const router = useRouter();

  const onClickMoveToBoardDetail = (event) => {
    console.log("id: ", event.currentTarget.id);
    router.push(`/boards/${event.currentTarget.id}`);
    // 리스트 프리젠터에서 id를 지정해줘야함! event.target. 꼭 id 여야 하는가??
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
