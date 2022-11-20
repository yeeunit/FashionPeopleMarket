import Link from "next/link";
import * as A from "./MarketList.styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketListUI(props) {
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <>
      <A.Wrapper>
        <A.Title>Market LIST</A.Title>

        <A.ButtonWrap>
          <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            aria-label="alignment"
          >
            <ToggleButton
              value="left"
              aria-label="left"
              style={{ width: "5rem", height: "2.2rem" }}
            >
              최신순
            </ToggleButton>
            <ToggleButton
              value="right"
              aria-label="right"
              style={{ width: "5rem", height: "2.2rem" }}
            >
              인기순
            </ToggleButton>
          </ToggleButtonGroup>

          <A.WriteBtn>
            <Link href="/market/new">
              <a>상품등록</a>
            </Link>
          </A.WriteBtn>
        </A.ButtonWrap>

        <InfiniteScroll
          pageStart={0}
          loadMore={props.onFetchMore}
          hasMore={true}
        >
          <A.ContentsWrap>
            {props.data?.fetchUseditems.map((el) => (
              <A.OneBoxWrap
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                <A.Image src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80" />
                {el.images}
                {el.name}
                {el.remakrs}
                {el.contents}
                {el.price}
                {el.tags}
                {el.createdAt}
                {el.seller}
              </A.OneBoxWrap>
            )) || ""}

            {/* <A.OneBoxWrap></A.OneBoxWrap> */}
          </A.ContentsWrap>
        </InfiniteScroll>
      </A.Wrapper>
    </>
  );
}
