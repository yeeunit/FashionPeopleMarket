import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { EditorType } from "@toast-ui/editor";
import { LegacyRef } from "react";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

export default function ToastEditor(props: {
  defaultValue: string;
  onChangeDescription: (editorType: EditorType) => void;
  editorRef: LegacyRef<Editor>;
}) {
  return (
    <Editor
      onChange={props.onChangeDescription}
      initialValue={props.defaultValue}
      previewStyle="tab"
      height="200px"
      initialEditType="markdown" // or wysiwyg
      language="ko-KR"
      useCommandShortcut={false}
      hideModeSwitch={true}
      ref={props.editorRef}
      plugins={[colorSyntax]}
    />
  );
}
