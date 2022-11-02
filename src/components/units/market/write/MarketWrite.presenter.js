import * as A from "./MarketWrite.styles";

export default function MarketWriteUI(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickRegister)}>
        <A.Wrapper>
          <A.Title>상품 등록하기</A.Title>

          <A.InputWrap>
            <A.Label>상품명</A.Label>
            <A.InputBox type="text" {...props.register("name")} />
            {/* <div>{props.formState.errors.name?.message}</div> */}
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>한줄 설명</A.Label>
            <A.InputBox type="text" {...props.register("remarks")} />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>내용</A.Label>
            {/* <A.InputBox type="text" {...props.register("contents")} /> */}
            {/* <div>{props.formState.errors.contents?.message}</div> */}
            <props.ReactQuill onChange={props.onChangeContents} />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>가격</A.Label>
            <A.InputBox type="text" {...props.register("price")} />
            {/* <div>{props.formState.errors.price?.message}</div> */}
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>태그</A.Label>
            <A.InputBox type="text" {...props.register("tags")} />
            {/* <div>{props.formState.errors.tags?.message}</div> */}
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>주소</A.Label>
            <A.InputBox type="text" {...props.register("useditemAddress")} />
          </A.InputWrap>
          <A.InputWrap>
            <A.Label>이미지</A.Label>
            <A.InputBox />
          </A.InputWrap>

          <A.RegisterBtn
          // style={{ backgroundColor: props.formState.isValid ? "blue" : "" }}
          >
            등록하기
          </A.RegisterBtn>
        </A.Wrapper>
      </form>
    </>
  );
}
