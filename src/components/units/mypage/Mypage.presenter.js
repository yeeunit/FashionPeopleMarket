import Link from "next/link";
import { useRouter } from "next/router";
import PointPage from "../../../../pages/mypage/point";
import * as A from "./Mypage.styles";
// playground@gmail.com / playground@09

export default function MypageUI(props) {
  const router = useRouter();

  return (
    <>
      <A.Wrapper>
        <A.LeftWrap>
          <A.Profile>
            {" "}
            <img src="/images/ye1.png" />
          </A.Profile>
          <A.Name>
            Lady Gaga
            {/* {props.data?.props.fetchUserLoggedIn?.name} */}
          </A.Name>
          <A.Tabs>
            <Link href="/mypage/update"> 회원정보 수정</Link>
          </A.Tabs>
          <A.Tabs>내가 쓴 글</A.Tabs>
          <A.Tabs>찜 목록</A.Tabs>
          <A.Tabs>
            {/* <Link href="/mypage/point">포인트 충전하기</Link> */}
            <div onClick={props.onClickPoint}>포인트 충전하기</div>
          </A.Tabs>
        </A.LeftWrap>

        <A.RightWrap>
          <A.Title>My page</A.Title>
          {/* <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>; */}
          {/* <Update /> */}
        </A.RightWrap>

        {props.isTrue ? (
          <>
            <PointPage />
          </>
        ) : (
          <></>
        )}
        {/* <A.TopWrapper>
        <A.box1></A.box1>
        </A.TopWrapper> */}
      </A.Wrapper>
    </>
  );
}
