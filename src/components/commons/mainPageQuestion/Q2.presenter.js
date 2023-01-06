import * as S from "./mainPageQuestion.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Q2Presenter(props) {
  return (
    <S.QuestionBox2
      onClick={props.onClickQuestion2}
      isAnswer2={props.isAnswer2}
    >
      <S.QuestionContents2 isAnswer2={props.isAnswer2}>
        쇼핑몰인가요?
        <ExpandMoreIcon fontSize="large" />
      </S.QuestionContents2>
      {props.isAnswer2 && (
        <S.AnswerContents>
          쇼핑몰이라기보다는 리액트를 사용한 다양한 기능들을 구현해보고자 하는
          <br />
          페이지입니다. 옷과 관련된 자유게시판(CRUD)과 중고마켓(결제) <br />
          서비스를 제공하고자 합니다.
        </S.AnswerContents>
      )}
    </S.QuestionBox2>
  );
}
