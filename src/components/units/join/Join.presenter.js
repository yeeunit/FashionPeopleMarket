import Link from "next/link";
import * as A from "./Join.styles";

export default function JoinUI(props) {
  // console.log(props.onClickSignUp);
  return (
    <>
      <A.Wrapper>
        <A.Title>
          회원가입
          {/* <span>Sign Up</span> */}
        </A.Title>
        <A.InputWrap>
          <A.Label> 이름 </A.Label>
          <A.InputBox
            type="text"
            placeholder="Ex) 홍길동"
            onChange={props.onChangeName}
            // {...props.register("name")}
          />
        </A.InputWrap>
        {/* <A.Error>{props.formState.errors.name?.message}</A.Error> */}

        <A.InputWrap>
          <A.Label>이메일</A.Label>
          <A.InputBox
            type="text"
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
            onChange={props.onChangeEmail}
            // {...props.register("email")}
          />{" "}
        </A.InputWrap>
        {/* <A.Error>{props.formState.errors.email?.message}</A.Error> */}
        <A.InputWrap>
          <A.Label>비밀번호</A.Label>
          <A.InputBox
            type="password"
            placeholder="영문+숫자 조합 8-16자리를 입력해주세요."
            // {...props.register("password")}
            onChange={props.onChangePassword}
          />{" "}
        </A.InputWrap>
        {/* <A.Error>{props.formState.errors.password?.message}</A.Error> */}
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
        <A.JoinBtn
          type="button"
          // onClick={props.handleSubmit(props.onClickSignUp)}
          onClick={props.onClickSignUp}

          // onClick={props.onClickTest}
        >
          회원가입
        </A.JoinBtn>
        <A.LoginWrap>
          <div>이미 아이디가 있으신가요?</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/login">
            <a>
              <A.LoginBtn>로그인하기</A.LoginBtn>
            </a>
          </Link>
        </A.LoginWrap>
      </A.Wrapper>
    </>
  );
}
