import * as A from "./MarketWrite.styles";
import { Modal, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import DaumPostcodeEmbed from "react-daum-postcode";
import KaKaoMap from "../../../commons/map/index";
import Upload02 from "../../../commons/uploads/02/Upload.container";
export default function MarketWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        {/* <A.Title>상품 등록하기</A.Title> */}

        {props.isAddressOpen && (
          <Modal
            visible={true}
            closable={false}
            footer={[
              <Button
                key="closeModal"
                id="modalClose"
                type="primary"
                onClick={props.onClickAddressModal}
              >
                취소
              </Button>,
            ]}
          >
            <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
          </Modal>
        )}
        <A.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</A.Title>

        <A.Form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickCreate)
          }
        >
          <A.FormItemWrapper>
            <div className="title">상품명</div>
            <div className="input-box">
              <A.Input
                type="text"
                placeholder="상품명을 작성해주세요"
                {...props.register("name")}
              />
              <div className="error"></div>
            </div>
          </A.FormItemWrapper>

          <A.FormItemWrapper>
            <div className="title">상품요약</div>
            <div className="input-box">
              <A.Input
                type="text"
                placeholder="상품요약을 작성해주세요"
                {...props.register("remarks")}
              />
              <div className="error"></div>
            </div>
          </A.FormItemWrapper>

          <A.FormItemContentsWrapper>
            <div className="title">상품내용</div>
            <div className="input-box">
              <A.ContentsReactQuill onChange={props.onChangeContents} />
            </div>
          </A.FormItemContentsWrapper>

          <A.FormItemWrapper>
            <div className="title">판매 가격</div>
            <div className="input-box">
              <A.Input
                type="text"
                placeholder="판매 가격을 입력해주세요"
                {...props.register("price")}
              />
              <div className="error"></div>
            </div>
          </A.FormItemWrapper>

          <A.FormItemWrapper>
            <div className="title">태그 입력</div>
            <div className="input-box">
              <A.Input
                type="text"
                placeholder="태그,태그,태그"
                {...props.register("tags")}
              />
              <div className="error"></div>
            </div>
          </A.FormItemWrapper>

          <A.FormMapWrapper>
            <div className="title">거래 위치</div>
            <div className="align-box">
              <KaKaoMap
                data={props.data}
                address={props.address}
                width="22rem"
                height="14rem"
              />
              <div className="input-align">
                <div className="address-search-align">
                  <A.ZipcodeInput
                    placeholder="07250"
                    readOnly
                    {...props.register("useditemAddress.zipcode")}
                  ></A.ZipcodeInput>

                  <A.AddressButton
                    type="button"
                    id="modalOpen"
                    onClick={props.onClickAddressModal}
                  >
                    우편번호 검색
                  </A.AddressButton>
                </div>
                <div className="input-box">
                  <A.AddressInput
                    type="text"
                    readOnly
                    {...props.register("useditemAddress.address")}
                  />
                </div>
                <div className="input-box">
                  <A.AddressInput
                    type="text"
                    {...props.register("useditemAddress.addressDetail")}
                  />
                </div>
              </div>
            </div>
          </A.FormMapWrapper>

          <A.FormMapWrapper>
            <div className="title">사진 첨부</div>
            <div className="image-wrapper">
              {props.fileUrls.map((el, index) => (
                <Upload02
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </div>
          </A.FormMapWrapper>
          <A.BtnWrap>
            <A.YellowBtn onClick={props.onClickCancel}>취소</A.YellowBtn>
            <A.BlackBtn>{props.isEdit ? "수정하기" : "등록하기"}</A.BlackBtn>
          </A.BtnWrap>
        </A.Form>
      </A.Wrapper>
    </>
  );
}
