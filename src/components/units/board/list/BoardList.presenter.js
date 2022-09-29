import * as A from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>타이틀</A.Title>

        <A.ColorChange isTrue={props.isTrue} onClick={props.handleOnClick}>
          클릭하면 색변경!
        </A.ColorChange>
      </A.Wrapper>
    </>
  );
}
