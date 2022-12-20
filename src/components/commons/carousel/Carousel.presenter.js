import { Carousel } from "antd";
import * as A from "./Carousel.styles";

export default function Crsl() {
  return (
    <>
      <Carousel autoplay>
        <A.Wrapper>
          <A.Carousel src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        </A.Wrapper>
        <A.Wrapper>
          <A.Carousel src="https://images.unsplash.com/photo-1629426958003-35a5583b2977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </A.Wrapper>
        <A.Wrapper>
          <A.Carousel src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </A.Wrapper>
        <A.Wrapper>
          <A.Carousel src="https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80" />
        </A.Wrapper>
        <A.Wrapper>
          <A.Carousel src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
        </A.Wrapper>
      </Carousel>
    </>
  );
}
