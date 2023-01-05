import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isWatchActiveState } from "../../../../commons/store/index";
import LayoutSidebarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const [isActive, setIsActive] = useRecoilState(isWatchActiveState);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const result = JSON.parse(sessionStorage.getItem("watchList") || "[]");
    setWatchList(result);
  }, [isActive]);

  return <LayoutSidebarUI watchList={watchList} />;
}
