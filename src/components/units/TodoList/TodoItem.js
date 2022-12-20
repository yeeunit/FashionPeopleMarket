import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from "@mui/icons-material";

export default function TodoItem({ todos }) {
  console.log({ todos });
  // const { id, text, checked } = todos;

  return (
    <>
      <div className="TodoItem">
        {/* <div className={`contents ${checked ? "checked" : ""}`}>
          {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          <div>
            {id}
            {text}
          </div>
        </div> */}
      </div>
    </>
  );
}
