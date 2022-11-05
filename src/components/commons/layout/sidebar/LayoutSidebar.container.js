import { useEffect } from "react";
import LayoutSidebarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const [isActive, setIsActive] = useState(false);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const result = JSON.parse(sessionStorage.getItem("watchList") || "[]");
    setWatchList(result);
  }, [isActive]);

  return <LayoutSidebarUI watchList={watchList} />;
}
