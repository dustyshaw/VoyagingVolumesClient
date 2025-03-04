// import React, { useState } from "react";
// import ToastList from "../Components/toasts/ToastList/ToastList";

// interface Toast {
//   id: string;
//   message: string;
//   type: "success" | "danger" | "warning";
//   show: boolean;
// }

// const Toast = () => {
//   const [toasts, setToasts] = useState<Toast[]>([]);

//   const [autoClose] = useState(true);
//   const [autoCloseDuration] = useState(5);

//   const removeToast = (id: string) => {
//     setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//   };

//   const show50 = () => {
//     for (let i = 0; i < 50; i++) {
//       showToast(`This is toast number ${i + 1}`, "warning");
//     }
//   };

//   const showToast = (
//     message: string,
//     type: "success" | "danger" | "warning",
//     show = true
//   ) => {
//     const toast: Toast = {
//       id: String(Date.now()),
//       message,
//       type,
//       show,
//     };

//     setToasts((prevToasts) => [...prevToasts, toast]);

//     if (autoClose) {
//       setTimeout(() => {
//         removeToast(toast.id);
//       }, autoCloseDuration * 1000);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <button
//           onClick={() =>
//             showToast("Yay, you did something right for once.", "success")
//           }
//           className="btn btn-outline-success m-3"
//         >
//           Show Success Toast
//         </button>
//         <button
//           onClick={() => showToast("Uh Oh! Something went wrong.", "danger")}
//           className="btn btn-outline-danger m-3"
//         >
//           Show Error Toast
//         </button>
//         <button
//           onClick={() =>
//             showToast("Hey, you better check that input field.", "warning")
//           }
//           className="btn btn-outline-warning m-3"
//         >
//           Show Warning Toast
//         </button>
//         <button
//           onClick={() => show50()}
//           className="btn btn-outline-primary m-3"
//         >
//           Show 50
//         </button>
//         <ToastList
//           data={toasts}
//           position="bottom-right"
//           removeToast={removeToast}
//         />
//       </div>
//     </>
//   );
// };

// export default Toast;
