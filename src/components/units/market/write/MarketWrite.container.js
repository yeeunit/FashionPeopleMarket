import { useForm } from "react-hook-form";
import MarketWriteUI from "./MarketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품명을 입력하세요"),
  //  remarks: yup.string().required("한줄 설명을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  price: yup.string().required("가격을 입력해주세요"),
  tags: yup.string().required("태그를 입력해주세요"),
});

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWrite() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const [imageUrls, setImageUrls] = useState(["", "", ""])
  // const [files, setFiles] = useState([])

  // const [uploadFile] = useMutation(UPLOAD_FILE)

  const onChangeContents = (value) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 강제로 알려주는 기능!!
    trigger("contents");
  };

  const onClickRegister = async (data) => {
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remakrs: data.remarks,
          contents: data.contents,
          price: data.price,
          tags: data.tags,
          zipcode: data.useditemAddress.zipcode,
          address: data.useditemAddress.address,
          addressDetail: data.useditemAddress.addressDetail,
          // images: data.images
        },
      },
    });
    router.push(`/market/${result.data.createUseditem._id}`);
  };
  console.log("리렌더링?");

  return (
    <>
      <MarketWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onClickRegister={onClickRegister}
        ReactQuill={ReactQuill}
        onChangeContents={onChangeContents}
      />
    </>
  );
}
