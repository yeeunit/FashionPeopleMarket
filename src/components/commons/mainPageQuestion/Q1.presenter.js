import * as S from "./mainPageQuestion.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Q1Presenter(props) {
  return (
    <S.QuestionBox1
      onClick={props.onClickQuestion1}
      isAnswer1={props.isAnswer1}
    >
      {/* <AddIcon /> */}
      <S.QuestionContents1 isAnswer1={props.isAnswer1}>
        이 사이트는 어떤 목적으로 제작된 것인가요?
        <ExpandMoreIcon fontSize="large" />
        {/* <AddIcon /> */}
      </S.QuestionContents1>
      {props.isAnswer1 && (
        <S.AnswerContents>
          개인 포트폴리오를 위해 만들어진 웹사이트입니다. <br />
          즐겁게 둘러봐 주세요.
        </S.AnswerContents>
      )}
    </S.QuestionBox1>
  );
}
