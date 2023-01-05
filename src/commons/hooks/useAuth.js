import { useRouter } from "next/router";
import { useEffect } from "react";
import { message, Modal } from "antd";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.success("로그인 후 이용 가능합니다!!!");
      router.push("/login");
    }
  }, []);
}
