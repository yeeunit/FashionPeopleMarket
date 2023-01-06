import * as A from "./Update.styles";
export default function UpdateUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>회원정보 수정하기</A.Title>
        <A.Label>이름</A.Label>
        <A.Input></A.Input>
        <A.Label>사진</A.Label>
        <A.Input></A.Input>
      </A.Wrapper>
    </>
  );
}
