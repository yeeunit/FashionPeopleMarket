import Link from "next/link";
import LayoutSidebar2 from "../../commons/layout/sidebar2/LayoutSidebar2.container";
import * as A from "./Other.style";

export default function OtherUI(props) {
  console.log("props", props);
  return (
    <>
      <A.Wrapper>
        {/* <LayoutSidebar2 /> */}
        {/* <A.LeftWrap>
          <A.Profile></A.Profile>
          <A.Name>PRACTICE</A.Name>
          <A.Tabs>연습1</A.Tabs>
          <A.Tabs>연습2</A.Tabs>
          <A.Tabs>연습3</A.Tabs>
        </A.LeftWrap> */}
        <A.RightWrap>
          <A.Title>연습 페이지</A.Title>

          <A.BoxWrap>
            <A.Box>
              <A.Lable>겉옷</A.Lable>
              {props.userSelect && props.userSelect.name === "Outer" ? (
                <A.Image
                  src={props.userSelect && props.userSelect.img}
                  defaultValue={props.userSelect?.img}
                />
              ) : (
                <A.Image src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg" />
              )}
              <A.Button onClick={() => props.onClickSelect("outer")}>
                추가
              </A.Button>
            </A.Box>
            <A.Box>
              <A.Lable>상의</A.Lable>
              {props.userSelect && props.userSelect.name === "Top" ? (
                <A.Image
                  src={props.userSelect && props.userSelect.img}
                  defaultValue={props.userSelect?.img || ""}
                />
              ) : (
                <A.Image src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg" />
              )}

              <A.Button onClick={() => props.onClickSelect("top")}>
                추가
              </A.Button>
            </A.Box>
            <A.Box>
              <A.Lable>하의</A.Lable>
              {props.userSelect && props.userSelect.name === "Bottom" ? (
                <A.Image
                  src={(props.userSelect && props.userSelect.img) || ""}
                />
              ) : (
                <A.Image src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg" />
              )}

              <A.Button onClick={() => props.onClickSelect("bottom")}>
                추가
              </A.Button>
            </A.Box>
          </A.BoxWrap>
          <A.BoxWrap>
            <A.Box>
              <A.Lable>랜덤박스</A.Lable>
              <A.Image src={props.randomSelect && props.randomSelect.img} />

              <A.Button onClick={() => props.onClickRandomSelect("bottom")}>
                추천
              </A.Button>
            </A.Box>
          </A.BoxWrap>
        </A.RightWrap>
        {/* <A.Button>버튼</A.Button> */}
        <A.Box>
          <A.Title>
            <Link href="/weather">
              <a>날씨 연습</a>
            </Link>
          </A.Title>
        </A.Box>
      </A.Wrapper>
    </>
  );
}
