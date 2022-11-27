import * as S from "./mainPageQuestion.styles";

export default function Q2Presenter(props) {
  return (
    <S.QuestionBox2
      onClick={props.onClickQuestion2}
      isAnswer2={props.isAnswer2}
    >
      <S.QuestionContents2 isAnswer2={props.isAnswer2}>
        모두 혼자 만든 것인가요?
      </S.QuestionContents2>
      {props.isAnswer2 && (
        <S.AnswerContents>
          네 그렇습니다. 코드지갑과 유튜브 강의 등을 통해 배운 것들을 적용하고
          응용하여 스스로 코딩하였습니다.
        </S.AnswerContents>
      )}
    </S.QuestionBox2>
  );
}
