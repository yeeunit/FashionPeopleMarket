import Link from "next/link";
import * as A from "./MarketList.styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { ImageFiles } from "../../../../commons/libraries/imageFiles";
import { getDate } from "../../../../commons/libraries/utils";
import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";

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
        <LayoutSidebar />
        <A.Title>중고마켓</A.Title>

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
            {props.data?.fetchUseditems.map((el, index) => (
              <A.OneBoxWrap
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {/* {[...ImageFiles].map((el, index) => ( */}
                <A.ImageBox key={index}>
                  <A.Image>
                    <img src={ImageFiles[index % 15]} />
                  </A.Image>
                  {/* <A.Image src="https://images.unsplash.com/photo-1619166719123-471cee9ce91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" /> */}
                  <A.TextBox>
                    {/* {el.images} */}
                    {/* <div>{el.remarks}</div> */}
                    {/* <div>{el.contents}</div> */}
                    <div className="name">{el.name}</div>
                    <div className="price">💰 {el.price} 원</div>
                    <div>{el.tags}</div>
                    <div className="date">(등록일) {getDate(el.createdAt)}</div>
                    <div>{el.seller}</div>
                  </A.TextBox>
                </A.ImageBox>
                {/* ))} */}
              </A.OneBoxWrap>
            )) || ""}

            {/* <A.OneBoxWrap></A.OneBoxWrap> */}
          </A.ContentsWrap>
        </InfiniteScroll>
      </A.Wrapper>
    </>
  );
}
