import cn from "classnames";
import React, { ReactNode, useEffect } from "react";
import useEscapeKey from "../../hooks/useEsc";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

const Modal = ({ children, onClose, className }: Props) => {
  useEscapeKey(onClose);
  return (
    <>
      <div
        className={`${styles.overlay} fixed z-10 cursor-pointer top-0 right-0 bottom-0 left-0`}
        onClick={onClose}
      />
      <div
        className={cn(
          className,
          styles.container,
          `bg-card-bg absolute-center cursor-default rounded shadow z-20 p-6`
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
