import Link from "next/link";
import LayoutSidebar2 from "./LayoutSidebar2.container";
import * as A from "./LayoutSidebar2.styles";

export default function LayoutSidebarUI2() {
  return (
    <>
      <A.Wrapper>
        <LayoutSidebar2 />
        <A.Profile></A.Profile>
        <A.Name>PRACTICE</A.Name>
        <A.Tabs>Other</A.Tabs>
        <A.Tabs>
          <Link href="/weather">
            <a>Weather</a>
          </Link>
        </A.Tabs>
        <A.Tabs>연습3</A.Tabs>
        <A.Tabs>연습3</A.Tabs>
        <A.Tabs>연습3</A.Tabs>
        <A.Tabs>연습3</A.Tabs>
      </A.Wrapper>
    </>
  );
}
