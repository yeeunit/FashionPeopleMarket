import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import UpdateUI from "./Update.presenter";
import { UPDATE_USER } from "./Update.queries";

export default function Update() {
  const router = useRouter();

  const [updateUser] = useMutation(UPDATE_USER);

  const onClickUpdateUserInfo = async (data) => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: data.name,
            picture: data.picture,
          },
        },
      });
      router.push("/mypage/update");
      message.success("수정에 성공하였습니다!!");
    } catch (error) {}
  };

  return (
    <>
      <UpdateUI onClickUpdateUserInfo={onClickUpdateUserInfo} />
    </>
  );
}
