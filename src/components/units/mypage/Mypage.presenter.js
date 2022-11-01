import * as A from "./Mypage.styles";

export default function MypageUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>My page</A.Title>
        <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>;
      </A.Wrapper>
    </>
  );
}
