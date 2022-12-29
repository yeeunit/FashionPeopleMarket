import * as S from "./mainPageQuestion.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Q3Presenter(props) {
  return (
    <S.QuestionBox3
      onClick={props.onClickQuestion3}
      isAnswer3={props.isAnswer3}
    >
      <S.QuestionContents3 isAnswer3={props.isAnswer3}>
        이 사이트는 어떤 목적으로 제작된 것이지요?
        <ExpandMoreIcon fontSize="large" />
      </S.QuestionContents3>
      {props.isAnswer3 && (
        <S.AnswerContents>
          개인 포트폴리오를 위해 만들어진 웹사이트입니다. <br />
          즐겁게 둘러봐 주세요 ^^
        </S.AnswerContents>
      )}
    </S.QuestionBox3>
  );
}
