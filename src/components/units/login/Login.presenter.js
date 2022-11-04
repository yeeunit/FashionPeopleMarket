import * as A from "./Login.styles";

export default function LoginWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>로그인</A.Title>

        <A.InputWrap>
          <A.Label>이메일</A.Label>{" "}
          <A.InputBox type="text" onChange={props.onChangeEmail} />{" "}
        </A.InputWrap>
        <A.Error>이메일 주소를 정확하게 입력해주세요</A.Error>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label>{" "}
          <A.InputBox type="password" onChange={props.onChangePassword} />{" "}
        </A.InputWrap>
        <A.Error>비밀번호를 정확하게 입력해주세요</A.Error>

        <A.LoginBtn onClick={props.onClickLogin}>로그인하기</A.LoginBtn>
      </A.Wrapper>
    </>
  );
}
