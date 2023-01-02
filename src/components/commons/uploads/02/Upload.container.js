import { useMutation } from "@apollo/client";
import { useRef } from "react";
import UploadUI02 from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.queries";
import { checkValidationImage } from "./Upload.validation";

export default function Upload02(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: "실패하였습니다!!" });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <UploadUI02
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
