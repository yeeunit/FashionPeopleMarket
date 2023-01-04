import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as A from "./Mypage.styles";

// logo@gmail.com / logo@333

export default function MypageUI(props) {
  const router = useRouter();

  return (
    <>
      <A.Wrapper>
        <A.LeftWrap>
          <A.Profile></A.Profile>
          <A.Name>Lady GaGa</A.Name>
          <A.Tabs>회원정보 수정</A.Tabs>
          <A.Tabs>내가 쓴 글</A.Tabs>
          <A.Tabs>찜 목록</A.Tabs>
          <A.Tabs>내 포인트</A.Tabs>
        </A.LeftWrap>
        <A.RightWrap>
          <A.Title>My page</A.Title>
          <div>{props.data?.props.fetchUserLoggedIn.name}님 환영합니다!</div>;
        </A.RightWrap>
        {/* <A.TopWrapper>
        <A.box1></A.box1>
        </A.TopWrapper> */}
        <A.bar></A.bar>
      </A.Wrapper>
    </>
  );
}
