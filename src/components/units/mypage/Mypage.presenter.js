import * as A from "./Mypage.styles";

export default function MypageUI() {
  return (
    <>
      <A.Wrapper>
        <A.Title>My page</A.Title>

        <A.InputWrap>
          <A.Label>이메일</A.Label> <A.InputBox type="text" />{" "}
        </A.InputWrap>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label> <A.InputBox type="password" />{" "}
        </A.InputWrap>

        <A.LoginBtn>로그인하기</A.LoginBtn>
      </A.Wrapper>
    </>
  );
}
