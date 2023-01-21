import * as S from "./mainPageQuestion.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Q3Presenter(props) {
  return (
    <S.QuestionBox3
      onClick={props.onClickQuestion3}
      isAnswer3={props.isAnswer3}
    >
      <S.QuestionContents3 isAnswer3={props.isAnswer3}>
        포인트 충전했는데 환불은 어떻게 할 수 있나요?
        <ExpandMoreIcon fontSize="large" />
      </S.QuestionContents3>
      {props.isAnswer3 && (
        <S.AnswerContents>
          포인트 충전은 임시 결제 테스트 기능입니다. <br />
          자정이 지나면 자동 환불됩니다. ^^
        </S.AnswerContents>
      )}
    </S.QuestionBox3>
  );
}
