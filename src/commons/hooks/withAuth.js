// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { Modal } from 'antd';
// import React from 'react';

// export const withAuth = (Component) => (props) => {
//   const router = useRouter();

//   const warning = () => {
//     Modal.warning({
//       title: 'This is a warning message',
//       content: 'some messages...some messages...',
//     });
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("accessToken")) {

//       alert("로그인 후 이용 가능합니다!!!");
//       router.push("/products/login");
//     }
//   }, []);

//   return (
//     <>
//     <Component {...props} />;
//     </>
//   )
// };
