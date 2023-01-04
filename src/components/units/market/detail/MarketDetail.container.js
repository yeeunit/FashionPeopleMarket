import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  CREATE_USED_ITEM_QUESTION,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_QUESTION,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";
import FETCH_USED_ITEMS from "../list/MarketList.queries";
import { isBucketActiveState } from "../../../../commons/store/index";
import { useForm } from "react-hook-form";
import MarketDetailUI from "./MarketDetail.presenter";

export default function MarketDetail() {
  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [userInfo, setUserInfo] = useState();
  const [isActive, setIsActive] = useRecoilState(isBucketActiveState);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketId },
  });
  // console.log(data);

  const { data: dataUsedItemQuestions } = useQuery(FETCH_USED_ITEM_QUESTION, {
    variables: {
      useditemId: router.query.marketId,
    },
  });

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  const onClickUpdate = () => {
    router.push(`/product/${router.query.marketId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId: router.query.marketId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      router.push("/");
      message.success("삭제가 완료되었습니다!!");
    } catch (error) {
      message.error("삭제에 실패했습니다!");
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: {
          useditemId: router.query.marketId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.marketId,
            },
          },
        ],
      });
    } catch (error) {
      message.success("찜 실패!!!!");
    }
  };

  const onClickBucket = (el) => (event) => {
    const bucketList = JSON.parse(localStorage.getItem("bucketList") || "[]");

    const temp = bucketList.filter(
      (data) => data.fetchUseditem._id === el.fetchUseditem._id
    );
    if (temp.length === 1) {
      return;
    }
    setIsActive((prev) => !prev);
    bucketList.push(el);
    localStorage.setItem("bucketList", JSON.stringify(bucketList));
  };

  const onClickBuy = (id) => async (event) => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: _id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      router.push("/");
    } catch (error) {}
  };

  const onClickCommentCreate = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.marketId,
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: {
              useditemId: router.query.marketId,
            },
          },
        ],
      });
      reset({
        contents: "",
      });
    } catch (error) {}
  };

  return (
    <>
      <MarketDetailUI
        data={data}
        dataUsedItemQuestions={dataUsedItemQuestions}
        useditemId={router.query.marketId}
        pickCount={pickCount}
        userInfo={userInfo}
        onClickBucket={onClickBucket}
        onClickPick={onClickPick}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onClickBuy={onClickBuy}
        onClickCommentCreate={onClickCommentCreate}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
