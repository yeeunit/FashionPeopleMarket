import * as A from "./Mypage.styles";

// logo@gmail.com / logo@333

export default function MypageUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>My page</A.Title>

        <A.TopWrapper>
          <A.box1>
            <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>;
          </A.box1>
          <A.box2></A.box2>
          <A.box3></A.box3>
        </A.TopWrapper>
        <A.bar></A.bar>
      </A.Wrapper>
    </>
  );
}
