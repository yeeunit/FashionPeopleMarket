import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { errorModalStatus } from "../store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [isErrorModalStatus, setIsErrorModalStatus] =
    useRecoilState(errorModalStatus);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      setIsErrorModalStatus(true);
    }
  }, [setIsErrorModalStatus]);

  return <Component {...props} />;
};
