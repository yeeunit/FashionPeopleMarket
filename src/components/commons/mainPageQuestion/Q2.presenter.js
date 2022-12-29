import * as S from "./mainPageQuestion.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Q2Presenter(props) {
  return (
    <S.QuestionBox2
      onClick={props.onClickQuestion2}
      isAnswer2={props.isAnswer2}
    >
      <S.QuestionContents2 isAnswer2={props.isAnswer2}>
        이 사이트는 어떤 목적으로 제작된 것일까요?
        <ExpandMoreIcon fontSize="large" />
      </S.QuestionContents2>
      {props.isAnswer2 && (
        <S.AnswerContents>
          개인 포트폴리오를 위해 만들어진 웹사이트입니다. <br />
          즐겁게 둘러봐 주세요 ^^
        </S.AnswerContents>
      )}
    </S.QuestionBox2>
  );
}
