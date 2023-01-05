import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRef, useState } from "react";
import UploadUI01 from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.queries";
import { checkValidationImage } from "./Upload.validation";

// http://storage.goolgeapis.com/이미지url

export default function Upload01(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  console.log("uploadFile", uploadFile);

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log(file);
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log("업로드결과", result);

      props.onChangeFileUrls(result.data.uploadFile[0], props.index);
      console.log(result.data?.uploadFile.url);
      // setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      Modal.error({ content: "에러!" });
    }
  };

  const onClickImageUpload = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <UploadUI01
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        // defaultFileUrl={props.defaultFileUrl}
        onChangeFile={onChangeFile}
        onClickImageUpload={onClickImageUpload}
      />
    </>
  );
}
