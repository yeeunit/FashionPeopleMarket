import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as A from "./Mypage.styles";
import Update from "./update/Update.container";

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
          <A.Name>Lady GaGa</A.Name>
          <A.Tabs>회원정보 수정</A.Tabs>
          <A.Tabs>내가 쓴 글</A.Tabs>
          <A.Tabs>찜 목록</A.Tabs>
          <A.Tabs>포인트 충전하기</A.Tabs>
        </A.LeftWrap>
        <A.RightWrap>
          <A.Title>My page</A.Title>
          <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>;
          <Update />
        </A.RightWrap>
        {/* <A.TopWrapper>
        <A.box1></A.box1>
        </A.TopWrapper> */}
        <A.bar></A.bar>
      </A.Wrapper>
    </>
  );
}
