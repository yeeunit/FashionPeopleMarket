import * as S from "./Question.styles";
import { MouseEvent, useState } from "react";

export default function QuestionUI(props) {
  // const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [isClick, setIsClick] = useState("");

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickQuestionRegistration = () => {
    toggleModal();
  };

  const onClickQuestion = (event) => {
    setIsClick(event.currentTarget.id);
  };

  const onClickModalCancel = () => {
    toggleModal();
  };
  return (
    <>
      <S.Wrapper>
        <S.QuestionTitleWrapper>
          <S.QuestionTitle>카페 사장님께 문의하기</S.QuestionTitle>

          <S.QuestionButton onClick={onClickQuestionRegistration}>
            문의하기
          </S.QuestionButton>
        </S.QuestionTitleWrapper>

        <S.QuestionTableWrapper>
          <S.QuestionTableRow
            style={{
              backgroundColor: "#1e3932",
              height: "4rem",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <S.QuestionStatusColumnHeader>
              답변 상태
            </S.QuestionStatusColumnHeader>
            <S.QuestionTitleColumnHeader style={{ textAlign: "center" }}>
              제목
            </S.QuestionTitleColumnHeader>
            <S.QuestionWriterColumnHeader>작성자</S.QuestionWriterColumnHeader>
            <S.QuestionDateColumnHeader>작성일</S.QuestionDateColumnHeader>
          </S.QuestionTableRow>

          <S.QuestionTableRow onClick={onClickQuestion}> </S.QuestionTableRow>

          <S.QuestionAnswerWrapper>
            <S.QuestionTableRow>
              <S.QuestionStatusColumn>No</S.QuestionStatusColumn>
              <S.QuestionTitleColumn>
                <S.QText> Q. 카페 예약 취소는 언제까지 해야하나요? </S.QText>
                {/* <S.EditImage src="/icons/edit.svg"></S.EditImage> */}
              </S.QuestionTitleColumn>
              <S.QuestionWriterColumn> 홍길동</S.QuestionWriterColumn>
              <S.QuestionDateColumn> 9/23</S.QuestionDateColumn>
            </S.QuestionTableRow>
            <S.QuestionTableRow>
              <S.QuestionStatusColumn>Yes</S.QuestionStatusColumn>
              <S.QuestionTitleColumn>
                <S.QText>Q. 예약 인원수는 제한 있나요? </S.QText>
                {/* <S.EditImage src="/icons/edit.svg"></S.EditImage> */}
              </S.QuestionTitleColumn>
              <S.QuestionWriterColumn> 김철수</S.QuestionWriterColumn>
              <S.QuestionDateColumn> 9/22</S.QuestionDateColumn>
            </S.QuestionTableRow>

            <S.QuestionTableRow>
              <S.QuestionStatusColumn>Yes</S.QuestionStatusColumn>
              <S.QuestionTitleColumn>
                <S.QText>
                  {" "}
                  Q. 예약금보다 적은 금액을 주문하면 차액 환불 되나요?{" "}
                </S.QText>
                {/* <S.EditImage src="/icons/edit.svg"></S.EditImage> */}
              </S.QuestionTitleColumn>
              <S.QuestionWriterColumn> 이영희</S.QuestionWriterColumn>
              <S.QuestionDateColumn> 9/21</S.QuestionDateColumn>
            </S.QuestionTableRow>
            {/* {el.id === props.isClick ? (
                    <S.AnswerWrapper>
                      <S.QuestionContents title={el.answer}>
                        {el.question}
                      </S.QuestionContents>
                      {el.status === "ANSWERED" ? (
                        <>
                          <S.AnswerTitle>
                            <S.AText>A. </S.AText>
                            {el.answerTitle}
                          </S.AnswerTitle>
                          <S.AnswerContents>{el.answer}</S.AnswerContents>
                        </>
                      ) : (
                        props.userLoggedData.fetchUserLoggedIn.id ===
                          props.data.seller?.id && (
                          <S.AnswerButton
                            onClick={props.onClickAnswerRegistration}
                          >
                            답변하기
                          </S.AnswerButton>
                        )
                      )}
                    </S.AnswerWrapper>
                  ) : (
                    <></>
                  )} */}
          </S.QuestionAnswerWrapper>
        </S.QuestionTableWrapper>
      </S.Wrapper>

      {isVisible && (
        <S.CustomModal>
          <S.ModalWrapper>
            <S.TitleContentsText>문의제목</S.TitleContentsText>
            <S.TitleInput />
            <S.TitleContentsText>문의하기</S.TitleContentsText>
            <S.ContentsTextarea></S.ContentsTextarea>
            <S.ButtonWrapper>
              <S.RegistrationEditButton>등록</S.RegistrationEditButton>
            </S.ButtonWrapper>

            <S.CancelButton src="/x.png" onClick={onClickModalCancel} />
          </S.ModalWrapper>
        </S.CustomModal>
      )}
    </>
  );
}
