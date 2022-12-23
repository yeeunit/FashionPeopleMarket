import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
export default function BoardWrite(props) {
  const router = useRouter();
  message;
  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
  });

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const [inputs, setInputs] = useState(initialInputs);
  // const [inputsError, setInputsError] = useState(initialInputs);

  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // const onChangeContents = (value) => {
  //   console.log(value);

  //   setValue("contents", value === "<p><br></p>" ? "" : value);
  //   trigger("contents");
  // };

  // const onChangeYoutubeUrl = (event) => {
  //   setYoutubeUrl(event.target.value);
  // };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);

    trigger("zipcode");
    trigger("address");
    // setAddress(data.address);
    // setZipcode(data.zonecode);
    setIsOpen(false);
  };

  // const onChangeAddressDetail = (event) => {
  //   setAddressDetail(event.target.value);
  // };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  const onClickRegister = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            // zipcode: data.zipcode,
            // address: data.address,
            // addressDetail: data.addressDetail,
            // images: [...fileUrls],
            youtubeUrl: data.youtubeUrl,
            // address: {
            //   zipcode,
            //   address,
            //   addressDetail,
            // },
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: {
        //       boardId: router.query._id,
        //     },
        //   },
        // ],
      });
      alert("성공", result);
      message.success("등록 성공");
      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      console.log("실패", error);
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            // zipcode: data.zipcode,
            // address: data.address,
            // addressDetail: data.addressDetail,
            // images: [...fileUrls],
            youtubeUrl: data.youtubeUrl,
            // address: {
            //   zipcode,
            //   address,
            //   addressDetail,
            // },
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: {
        //       boardId: router.query._id,
        //     },
        //   },
        // ],
      });
      alert("성공", result);
      message.success("등록 성공");
      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      console.log("실패", error);
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <BoardWriteUI
        data={props.data}
        isActive={isActive}
        isOpen={isOpen}
        isEdit={props.isEdit}
        // inputsError={inputsError}
        // onChangeInputs={onChangeInputs}
        // zipcode={zipcode}
        // address={address}
        // addressDetail={addressDetail}
        // onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        // onChangeYoutubeUrl={onChangeYoutubeUrl}
        // fileUrls={fileUrls}
        // onChangeFileUrls={onChangeFileUrls}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
      />
    </>
  );
}
