import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
// import { breakPoints } from "../styles/media";

const TopBtnBox = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 3em;
  right: 5%;
  /* bottom: 5%; */
  transform: translate(-20%, -20%);
  width: 3rem;
  height: 3rem;
  background-color: #333;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.1em;
  cursor: pointer;
`;

const TopBtn = styled(ArrowUpOutlined)``;

const TopBtnActive = styled.button`
  display: none;
`;

export default function TopButton() {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

  //   const isHiddenTopButton = HIDDEN_TOP_BUTTON.includes(router.asPath);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 1200) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // setScrollY(0); // ScrollY 의 값을 초기화
    // setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <>
      {/* {windowSize ? (
        <>
          {" "}
          {!isHiddenTopButton && btnStatus ? (
            <>
              <TopBtnBox onClick={handleTop}>
                <TopBtn />
              </TopBtnBox>
            </>
          ) : (
            <>
              <TopBtnActive></TopBtnActive>
            </>
          )}
        </>
      ) : (
        <> */}
      {btnStatus ? (
        <>
          <TopBtnBox onClick={handleTop}>
            {/* <TopBtn /> */}
            TOP
          </TopBtnBox>
        </>
      ) : (
        <>
          <TopBtnActive></TopBtnActive>
        </>
      )}
      {/* </>
      )} */}
    </>
  );
}
