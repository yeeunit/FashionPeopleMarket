import { useState } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const [isTrue, setIsTrue] = useState(false);

  const handleOnClick = () => {
    setIsTrue((prev) => !prev);
  };

  return <BoardListUI isTrue={isTrue} handleOnClick={handleOnClick} />;
}
