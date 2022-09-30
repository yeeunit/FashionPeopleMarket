import * as A from "./Join.styles";

export default function JoinUI() {
  return (
    <>
      <A.Wrapper>
        <A.Title>회원가입 페이지입니다.</A.Title>

        <A.InputWrap>
          <A.Label>이름 </A.Label>
          <A.InputBox type="text" />
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>이메일</A.Label> <A.InputBox type="text" />{" "}
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label> <A.InputBox type="password" />{" "}
        </A.InputWrap>

        <A.JoinBtn>회원가입</A.JoinBtn>
      </A.Wrapper>
    </>
  );
}
