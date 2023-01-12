import {
  CloseOutlined,
  EditFilled,
  EnvironmentFilled,
  HeartFilled,
} from "@ant-design/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "antd/dist/antd";
import Comment from "../comment/Comment.containter";
import * as A from "./MarketDetail.styles";
import Dompurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import KaKaoMap from "../../../commons/map/index";

export default function MarketDetailUI(props) {
  return (
    <A.DetailWrapper>
      <A.DetailHeader>
        <A.HeaderLeftBox>
          {props.data?.fetchUseditem.images?.[0] !== "" ? (
            <>
              <A.Image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[0]}`}
                alt="이미지"
              />
            </>
          ) : (
            <>
              <div className="default-img">dd</div>
            </>
          )}
        </A.HeaderLeftBox>
        <A.HeaderRightBox>
          <A.HeaderRightTitle>
            <div>{props.data?.fetchUseditem.name}</div>
            {props.userInfo?._id === props.data?.fetchUseditem.seller?._id && (
              <div>
                <EditFilled onClick={props.onClickUpdate} />
                <CloseOutlined onClick={props.onClickDelete} />
              </div>
            )}
          </A.HeaderRightTitle>

          <A.HeaderRightPrice>
            {props.data?.fetchUseditem?.price}
            <span>원</span>
          </A.HeaderRightPrice>
          <A.HeaderRightContents>
            <div>{props.data?.fetchUseditem?.remarks}</div> <br />
            {/* <div className="tag"> {props.data?.fetchUseditem.tags}</div> */}
            {props.data?.fetchUseditem.tags?.map((el, index) => (
              <div key={uuidv4()} className="tag">
                # {el}
              </div>
            ))}
          </A.HeaderRightContents>
          <A.HeaderRightBtnWrap>
            <A.BtnPick
              pickCount={props.data?.fetchUseditem.pickedCount}
              className="zzim"
              onClick={props.onClickPick}
            >
              <HeartFilled />찜 {props.data?.fetchUseditem.pickedCount}
            </A.BtnPick>
            <button
              className="bucket"
              onClick={props.onClickBucket(props.data)}
            >
              장바구니
            </button>
            <button
              className="purchase"
              onClick={props.onClickBuy(props.data?.fetchUseditem._id)}
            >
              바로구매
            </button>
          </A.HeaderRightBtnWrap>
        </A.HeaderRightBox>
      </A.DetailHeader>

      <A.DetailBody>
        <A.BodyLeft>
          <h1>상품정보</h1>
          {props.data?.fetchUseditem?.images?.map((el, index) => (
            <div key={uuidv4()}>
              {el !== "" ? (
                <>
                  <image src={`https://storage.googleapis.com/${el}`} />
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
          {typeof window !== "undefined" && (
            <A.BodyLeftContentsBox
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></A.BodyLeftContentsBox>
          )}
          <A.BodyLeftMapBox>
            <div className="title">
              <EnvironmentFilled />
              <span>거래지역 : </span>
              <span>{props.data?.fetchUseditem?.useditemAddress?.address}</span>
              &nbsp;
              <span>
                {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
              </span>
              &nbsp;
              <span>{props.data?.fetchUseditem?.useditemAddress?.zipcode}</span>
              &nbsp;
            </div>
            <KaKaoMap
              data={props.data?.fetchUseditem}
              address={props.data?.fetchUseditem?.useditemAddress?.address}
              width="90%"
              height="22rem"
            />
          </A.BodyLeftMapBox>
        </A.BodyLeft>
        <A.BodyRight>
          <h1>판매자 정보</h1>
          <A.BodyRightProfile>
            <AccountCircleIcon
              style={{ color: "grey", fontSize: "3.3rem", marginRight: "1rem" }}
            />
            {/* <div className="circle"> </div> */}
            <div>{props.data?.fetchUseditem.seller?.name}</div>
          </A.BodyRightProfile>

          <A.BodyRightCommentBox>
            <h1>댓글</h1>

            <A.BodyRightCommentWriteBox>
              <A.BodyRightCommentWrite {...props.register("contents")} />
              <A.BodyRightBtnWrap>
                <A.BodyRightBtn
                  onClick={props.handleSubmit(props.onClickCommentCreate)}
                >
                  작성하기
                </A.BodyRightBtn>
              </A.BodyRightBtnWrap>
            </A.BodyRightCommentWriteBox>

            <A.BodyRightCommentListBox>
              {props.dataUsedItemQuestions?.fetchUseditemQuestions.map((el) => (
                <Comment
                  key={uuidv4()}
                  userInfoId={props.userInfo?._id}
                  el={el}
                  useditemId={props.useditemId}
                />
              ))}
            </A.BodyRightCommentListBox>
          </A.BodyRightCommentBox>
        </A.BodyRight>
      </A.DetailBody>
    </A.DetailWrapper>
  );
}
