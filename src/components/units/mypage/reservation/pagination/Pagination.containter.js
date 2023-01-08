import { useState } from "react";
import PaginationUI from "./Pagination.presenter";

export default function PaginationContainer(props) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const lastPage = props.count ? Math.ceil(props.count / 3) : 0;

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive(true);
      return;
    }
    setStartPage((prev) => prev - 3);
    props.refetch({ page: startPage - 3 });
    setCurrentPage(currentPage + 3);
    setIsActive(false);
  };

  const onClickNextPage = () => {
    if (startPage + 3 <= lastPage) {
      setStartPage((prev) => prev + 3);
      props.refetch({ page: startPage + 3 });
      setCurrentPage(currentPage - 3);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  // jsx
  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      isActive={isActive}
    />
  );
}
