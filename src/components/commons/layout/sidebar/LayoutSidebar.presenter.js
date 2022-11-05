import * as A from "./LayoutSidebar.styles";

export default function LayoutSidebarUI(props) {
  return (
    <>
      <A.SidebarWrapper>
        <A.Title>최근 본 상품</A.Title>
        <A.ItemBox>
          {props.watchList.map((el) => (
            <div key={el._id}>
              <image
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                alt="이미지"
              />
            </div>
          ))}
        </A.ItemBox>
      </A.SidebarWrapper>
    </>
  );
}
