import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();

  const [isTrue, setIsTrue] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);
  // console.log("data: ", data);

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 1000);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  const handleOnClick = () => {
    setIsTrue((prev) => !prev);
  };

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickMoveToBoardDetail = (event) => {
    console.log("id: ", event.currentTarget.id);
    router.push(`/boards/${event.currentTarget.id}`);
    // 리스트 프리젠터에서 id를 지정해줘야함! event.target. 꼭 id 여야 하는가??
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
    }
  };

  return (
    <BoardListUI
      isTrue={isTrue}
      handleOnClick={handleOnClick}
      data={data}
      onClickPage={onClickPage}
      startPage={startPage}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      refetch={refetch}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
