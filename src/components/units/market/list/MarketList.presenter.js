import Link from "next/link";
import * as A from "./MarketList.styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function MarketListUI() {
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

        <A.ContentsWrap>
          <A.OneBoxWrap>
            <A.Image />
          </A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
          <A.OneBoxWrap></A.OneBoxWrap>
        </A.ContentsWrap>
      </A.Wrapper>
    </>
  );
}
