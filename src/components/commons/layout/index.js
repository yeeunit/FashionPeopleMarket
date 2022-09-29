// import React from "react";
import { ReactNode } from "react";

import LayoutHeader from "./header/LayoutHeader.container";

// interface ILayoutProps {
//   children: ReactNode;
// }

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
    </>
  );
}
