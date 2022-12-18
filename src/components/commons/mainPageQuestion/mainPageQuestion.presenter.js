import * as S from "./mainPageQuestion.styles";
import Q1Presenter from "./Q1.presenter";
import Q2Presenter from "./Q2.presenter";
import Q3Presenter from "./Q3.presenter";
import Q4Presenter from "./Q4.presenter";

export default function MainPageQuestionPresenter(props) {
  return (
    <S.QuestionWrapper>
      <S.QuestionTitle>Q & A</S.QuestionTitle>
      <Q1Presenter
        onClickQuestion1={props.onClickQuestion1}
        isAnswer1={props.isAnswer1}
      />
      <Q2Presenter
        onClickQuestion2={props.onClickQuestion2}
        isAnswer2={props.isAnswer2}
      />
      <Q3Presenter
        onClickQuestion3={props.onClickQuestion3}
        isAnswer3={props.isAnswer3}
      />

      <Q4Presenter
        onClickQuestion4={props.onClickQuestion4}
        isAnswer4={props.isAnswer4}
      />
    </S.QuestionWrapper>
  );
}
