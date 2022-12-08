import { useState } from "react";
import MainUI from "./main.presenter";

export default function Main() {
  const [isTrue, setIsTrue] = useState(false);

  const handleOnClick = () => {
    console.log("색변경");
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <MainUI isTrue={isTrue} handleOnClick={handleOnClick} />
    </>
  );
}
