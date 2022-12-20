import LayoutFooter from "../../src/components/commons/layout/footer/LayoutFooter.container";
import Main from "../../src/components/units/main/Main.container";
import Crsl from "../../src/components/commons/carousel/Carousel.presenter";
import MainPageQuestionContainer from "../../src/components/commons/mainPageQuestion/mainPageQuestion.container";

export default function MainPage(props) {
  return (
    <>
      <Main />
      <Crsl />
      <MainPageQuestionContainer />

      <LayoutFooter />
    </>
  );
}
