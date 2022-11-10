import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();

  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogOut = async () => {
    try {
      await logoutUser();
      router.push("/");
      alert("로그아웃 성공");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LayoutHeaderUI onClickLogOut={onClickLogOut} />
    </>
  );
}
