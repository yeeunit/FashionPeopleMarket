import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

const initialInputs = { writer: "", password: "", title: "", contents: "" };

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState(initialInputs);
  const [inputsError, setInputsError] = useState(initialInputs);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInputs = (event) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    if (event.target.value !== "") {
      setInputsError({
        ...inputsError,
        [event.target.id]: "",
      });
    }

    if (Object.values(_inputs).every((el) => el)) {
      setInputs(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event) => {
    setYoutubeUrl(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const onClickRegister = async () => {
    const errors = {
      writer: "작성자를 입력해주세요",
      password: "비밀번호를 입력해주세요",
      title: "제목을 입력해주세요",
      contents: "내용을 입력해주세요",
    };
    Object.keys(inputs).forEach((el) => {
      if (!inputs[el]) {
        setInputsError({
          ...inputsError,
          [el]: errors[el],
        });
      }
    });
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });
        console.log(result.data?.createBoard._id);
        Modal.success({ content: "게시글 등록에 성공했습니다" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
        Modal.error({ content: "등록 실패!!" });
      }
    }
  };

  return (
    <>
      <BoardWriteUI
        isActive={isActive}
        isOpen={isOpen}
        inputsError={inputsError}
        onChangeInputs={onChangeInputs}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onChangeFileUrls={onChangeFileUrls}
        onClickRegister={onClickRegister}
        fileUrls={fileUrls}
      />
    </>
  );
}
