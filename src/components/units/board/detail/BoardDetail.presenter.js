import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import * as A from "./BoardDetail.styles";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export default function BoardDetailUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>상세보기</A.Title>
        <A.TopWrapper>
          <A.ImageWrapper>
            {props.data ? (
              <A.BigImage src={`${props.data?.fetchBoard?.images[0]}`} />
            ) : (
              <A.BigImage src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            )}

            <A.SmallImgWrap>
              {props.data?.fetchBoard?.images.map((el, index) =>
                props.data?.fetchBoard?.images[index] ? (
                  <A.SmallImage key={el._id} id={el._id} src={`${el[index]}`} />
                ) : (
                  <A.SmallImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII=" />
                )
              )}
            </A.SmallImgWrap>
          </A.ImageWrapper>

          <A.ContentsWrapper>
            <A.DateWrap>
              <A.Date>
                작성일 : {getDate(props.data?.fetchBoard?.createdAt)}
              </A.Date>

              {/* <A.Date>수정일 : {props.data?.fetchBoard?.updatedAt}</A.Date> */}
            </A.DateWrap>
            <A.InputWrap>
              <A.Label>제목</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.title}</A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>작성자</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.writer}</A.TextBox>
            </A.InputWrap>
            <A.InputWrap>
              <A.Label>내용</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.contents}</A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>주소</A.Label>
              <A.TextBox>
                {props.data?.fetchBoard?.address}
                {props.data?.fetchBoard?.addressDetail}
              </A.TextBox>
            </A.InputWrap>

            <A.InputWrap>
              <A.Label>유튜브</A.Label>
              <A.TextBox>{props.data?.fetchBoard?.youtubeUrl}</A.TextBox>
              {/* <ReactPlayer url="https://www.youtube.com/watch?v=hnanNlDbsE4"></ReactPlayer> */}
            </A.InputWrap>
            <A.LikeBox>
              <A.TextBox>
                <LikeOutlined />
                &nbsp;
                {props.data?.fetchBoard?.likeCount}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </A.TextBox>
              <A.TextBox>
                <DislikeOutlined />
                &nbsp;
                {props.data?.fetchBoard?.dislikeCount}
              </A.TextBox>
            </A.LikeBox>
          </A.ContentsWrapper>
        </A.TopWrapper>
        <A.BtnWrap>
          <A.RegisterBtn onClick={props.onClickModifyBtn}>
            수정하기
          </A.RegisterBtn>
          <A.RegisterBtn onClick={props.onClickDelete}>삭제하기</A.RegisterBtn>

          <A.CancelBtn>
            <Link href="/boards">
              <a>목록으로</a>
            </Link>
          </A.CancelBtn>
        </A.BtnWrap>
      </A.Wrapper>
    </>
  );
}
