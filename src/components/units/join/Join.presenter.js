import * as A from "./Join.styles";

export default function JoinUI() {
  return (
    <>
      <A.Wrapper>
        <A.Title>
          회원가입
          {/* <span>Sign Up</span> */}
        </A.Title>

        <A.InputWrap>
          <A.Label>이름 </A.Label>
          <A.InputBox type="text" />
        </A.InputWrap>
        <A.Error>이름을 입력하세요</A.Error>

        <A.InputWrap>
          <A.Label>이메일</A.Label>
          <A.InputBox type="text" />{" "}
        </A.InputWrap>
        <A.Error>이메일 주소를 정확하게 입력하세요</A.Error>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label>
          <A.InputBox
            type="password"
            placeholder="영문+숫자 조합 8-16자리를 입력해주세요."
          />{" "}
        </A.InputWrap>
        <A.Error>비밀번호를 정확하게 입력하세요</A.Error>

        <A.InputWrap>
          <A.Label>비밀번호 확인</A.Label>
          <A.InputBox
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />{" "}
        </A.InputWrap>
        <A.Error>비밀번호를 정확하게 입력하세요</A.Error>

        <A.JoinBtn>회원가입</A.JoinBtn>
      </A.Wrapper>
    </>
  );
}
