// import React from "react";
import { ReactNode } from "react";

import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";
// interface ILayoutProps {
//   children: ReactNode;
// }

// const HIDDEN_FOOTERS = ["/market", "/other", "/weather", "/login", "/boards"];

export default function Layout(props) {
  const router = useRouter();
  // const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
      {/* {!isHiddenFooter && <LayoutFooter />} */}
    </>
  );
}
