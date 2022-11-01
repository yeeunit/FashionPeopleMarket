import * as A from "./Login.styles";

export default function LoginWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>로그인 페이지입니다.</A.Title>

        <A.InputWrap>
          <A.Label>이메일</A.Label>{" "}
          <A.InputBox type="text" onChange={props.onChangeEmail} />{" "}
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label>{" "}
          <A.InputBox type="password" onChange={props.onChangePassword} />{" "}
        </A.InputWrap>

        <A.LoginBtn onClick={props.onClickLogin}>로그인하기</A.LoginBtn>
      </A.Wrapper>
    </>
  );
}
