import { useState } from "react";
import UploadUI from "./upload.presenter";
import { checkValidationFile } from "../../../../src/commons/libraries/validationFile";

export default function Upload() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
      }
    };
  };

  return (
    <>
      <UploadUI onChangeFile={onChangeFile} imageUrl={imageUrl} />
    </>
  );
}
