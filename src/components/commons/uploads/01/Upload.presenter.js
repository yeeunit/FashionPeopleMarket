export default function UploadUI01(props) {
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", background: "grey" }}
        onClick={props.onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
      <img src={`https://storage.googleapis.com/${props.imageUrl}`} />
    </>
  );
}
