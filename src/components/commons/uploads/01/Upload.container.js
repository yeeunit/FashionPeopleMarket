import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRef } from "react";
import UploadUI01 from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.queries";

export default function Upload01(props) {
  const fileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      Modal.error({ content: "에러!" });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <UploadUI01
        onChangeFile={onChangeFile}
        imageUrl={props.imageUrl}
        fileRef={fileRef}
        onClickImage={onClickImage}
      />
    </>
  );
}
