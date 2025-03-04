import React, { useEffect, useRef } from "react";
import Toast from "../Toast";
import "./ToastList.modules.scss";

interface ToastItem {
  id: string;
  message: string;
  type?: "success" | "danger" | "warning";
  show: boolean;
}

interface ToastListProps {
  data: ToastItem[];
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  removeToast: (id: string) => void;
}

const ToastList: React.FC<ToastListProps> = ({
  data,
  position,
  removeToast,
}) => {
  const listRef = useRef(null);

  const handleScrolling = (el: HTMLDivElement | null) => {
    const isTopPosition = ["top-left", "top-right"].includes(position);
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else {
      el?.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleScrolling(listRef.current);
  }, [position, data]);

  return (
    data.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
      >
        {data.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            show={toast.show}
          />
        ))}
      </div>
    )
  );
};

export default ToastList;
