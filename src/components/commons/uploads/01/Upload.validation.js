import { Modal } from "antd";

export function checkValidationImage(file) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다" });
    return false;
  }
  if (file.size > 10 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다 (10MB 미만 가능)" });
    return false;
  }
  if (
    !file.type.includes("jpg") &&
    !file.type.includes("jpeg") &&
    !file.type.includes("png")
  ) {
    Modal.error({ content: "파일 확장자가 올바르지 않습니다." });
    return false;
  }
  return file;
}
