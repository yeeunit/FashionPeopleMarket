import { UploadButton, UploadFileHidden, UploadImage } from "./Upload.styles";

export default function UploadUI01(props) {
  console.log(props.fileUrl);
  return (
    <>
      {props.fileUrl ? (
        <UploadButton
          onClick={props.onClickImageUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadImage onClick={props.onClickImageUpload}>+</UploadImage>
      )}

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
