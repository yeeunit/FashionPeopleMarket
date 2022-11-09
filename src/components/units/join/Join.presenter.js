import * as A from "./Join.styles";

export default function JoinUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>
          회원가입
          {/* <span>Sign Up</span> */}
        </A.Title>
        <A.InputWrap>
          <A.Label>이름 </A.Label>
          <A.InputBox type="text" id="name" onChange={props.onChangeInputs} />
        </A.InputWrap>
        <A.Error>이름을 입력하세요</A.Error>
        <A.InputWrap>
          <A.Label>이메일</A.Label>
          <A.InputBox
            type="text"
            id="email"
            onChange={props.onChangeInputs}
          />{" "}
        </A.InputWrap>
        <A.Error>이메일 주소를 정확하게 입력하세요</A.Error>
        <A.InputWrap>
          <A.Label>비밀번호</A.Label>
          <A.InputBox
            type="password"
            id="password"
            placeholder="영문+숫자 조합 8-16자리를 입력해주세요."
            onChange={props.onChangeInputs}
          />{" "}
        </A.InputWrap>
        <A.Error>비밀번호를 정확하게 입력하세요</A.Error>
        {/* <A.InputWrap>
          <A.Label>비밀번호 확인</A.Label>
          <A.InputBox
            type="password"
            id="password2"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={props.onChangePassword2}
          />{" "}
        </A.InputWrap>
        <A.Error>비밀번호를 정확하게 입력하세요</A.Error> */}
        <A.JoinBtn onClick={props.onClickSignUp}>회원가입</A.JoinBtn>
      </A.Wrapper>
    </>
  );
}
