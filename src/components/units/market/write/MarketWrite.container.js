import { message } from "antd";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./MarketWrite.presenter";
import * as yup from "yup";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { useEffect, useState } from "react";
import { FETCH_USED_ITEMS } from "../list/MarketList.queries";

// const schema = yup.object({
//   name: yup.string().required("상품명을 입력하세요"),
//   remarks: yup.string().required("한줄 설명을 입력해주세요"),
//   contents: yup.string().required("내용을 입력해주세요"),
//   price: yup.string().required("가격을 입력해주세요"),
//   tags: yup.string().required("태그를 입력해주세요"),
// });

// declare const window: typeof globalThis & { kakao: any; };

export default function MarketWrite(props) {
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    reset,
    formState,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        name: props.data.fetchUseditem.name,
        price: props.data.fetchUseditem.price,
        remarks: props.data.fetchUseditem.remarks,
        contents: props.data.fetchUseditem.contents,
        tags: props.data.fetchUseditem.tags?.join(),
        useditemAddress: {
          zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
          address: props.data.fetchUseditem.useditemAddress?.address,
          addressDetail:
            props.data.fetchUseditem.useditemAddress?.addressDetail,
        },
      });
      if (props.data.fetchUseditem.images?.length) {
        setFileUrls([...props.data.fetchUseditem.images]);
      }
    }
  }, [props.data]);

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickAddressModal = (event) => {
    if (event.currentTarget) {
      switch (event.currentTarget.id) {
        case "modalClose":
          setIsAddressOpen(false);
          break;
        case "modalOpen":
          setIsAddressOpen(true);
          break;
      }
    }
  };

  const onCompleteAddressSearch = (data) => {
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);

    trigger("useditemAddress.zipcode");
    trigger("useditemAddress.address");
    setIsAddressOpen(false);
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickCreate = async (data) => {
    try {
      await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags?.split(","),
            images: [...fileUrls],
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      router.push("/");
      message.success("등록에 성공하였습니다!!");
    } catch (error) {}
  };

  const onClickUpdate = async (data) => {
    try {
      const result = await updateUsedItem({
        variables: {
          useditemId: router.query.marketId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split(","),
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
        },
      });
      router.push(`/product/${result.data?.updateUseditem._id}`);
      message.success("수정에 성공하였습니다!!");
    } catch (error) {}
  };

  const onClickCancel = () => {
    router.push("/market");
  };

  return (
    <MarketWriteUI
      data={props.data}
      address={getValues("useditemAddress.address")}
      isEdit={props.isEdit}
      isAddressOpen={isAddressOpen}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      onClickAddressModal={onClickAddressModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickCancel={onClickCancel}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
