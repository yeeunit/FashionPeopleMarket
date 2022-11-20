import * as A from "./Other.style";

export default function OtherUI(props) {
  console.log("props", props);
  return (
    <>
      <A.Wrapper>
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

            <A.Button onClick={() => props.onClickSelect("top")}>추가</A.Button>
          </A.Box>
          <A.Box>
            <A.Lable>하의</A.Lable>
            {props.userSelect && props.userSelect.name === "Bottom" ? (
              <A.Image src={(props.userSelect && props.userSelect.img) || ""} />
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
        {/* <A.Button>버튼</A.Button> */}
      </A.Wrapper>
    </>
  );
}
