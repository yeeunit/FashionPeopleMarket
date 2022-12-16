import LayoutFooter from "../../src/components/commons/layout/footer/LayoutFooter.container";
import MainPageQuestionPresenter from "../../src/components/commons/mainPageQuestion/mainPageQuestion.presenter";
import Crsl from "../../src/components/units/carousel/Carousel.presenter";
import Main from "../../src/components/units/main/Main.container";

export default function MainPage() {
  return (
    <>
      <Main />
      <Crsl />
      <MainPageQuestionPresenter />
      <LayoutFooter />
    </>
  );
}
