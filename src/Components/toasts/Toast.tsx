import React from "react";
import "./toasts.modules.scss";
import Icons from "./Icons";

interface ToastProps {
  message: string;
  type?: "success" | "danger" | "warning"; // Optional type with specific values
  onClose: () => void; // Function type for onClose
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  onClose,
  show
}) => {
  const { CloseIcon, SuccessIcon, FailureIcon, WarningIcon } = Icons();

  const iconMap = {
    success: <SuccessIcon />,
    danger: <FailureIcon />,
    warning: <WarningIcon />,
  };
  const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast toast--${type} ${show ? 'show' : ''} border-left border-${type}`} role="alert" id="toastytoast">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <h6>{message}</h6>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <CloseIcon />
        </span>
      </button>
    </div>
  );
};

export default Toast;
