import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 5rem;
`;
const Input = styled.input`
  width: 12rem;
  height: 2.2rem;
`;

const Button = styled.button`
  width: 7.7rem;
  height: 2.2rem;
  margin: 1rem;
  cursor: pointer;
`;

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
      <Wrapper>
        <h2>구매 희망 상품을 입력해보세요.</h2>
        <Input type="text" value={input} onChange={onChangeInput} />

        <Button onClick={onClickAddList}>추가하기</Button>

        {lists.map((item, index) => (
          <div key={index}>
            <input type="checkbox" id={index} /> {item}
          </div>
        ))}
      </Wrapper>
    </>
  );
}
