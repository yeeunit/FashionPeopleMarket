export default function UploadUI(props) {
  return (
    <>
      <input type="file" onChange={props.onChangeFile} />
      <image src={props.imageUrl} />
    </>
  );
}
