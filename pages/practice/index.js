import { useState } from "react";
import * as A from "./styles";

export default function PracticePage() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickAddList = () => {
    const updateLists = [...lists, input];
    setLists(updateLists);
    setInput("");
  };

  return (
    <>
      <A.Wrapper>
        <h2>구매 희망 상품을 입력해보세요.</h2>
        <A.Input type="text" value={input} onChange={onChangeInput} />

        <A.Button onClick={onClickAddList}>추가하기</A.Button>

        <A.CardWrap>
          {lists.map((item, index) => (
            <A.Card key={index}>
              <A.Checkbox type="checkbox" id={index} /> {item}
              <A.Close>x</A.Close>
            </A.Card>
          ))}
        </A.CardWrap>
      </A.Wrapper>
    </>
  );
}
