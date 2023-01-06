import cn from "classnames";
import React, { ReactNode, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  text: string;
  delay?: number;
  direction?: "top" | "left" | "right" | "bottom";
  className?: string;
}

const Tooltip = ({ children, text, delay, direction, className }: Props) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={cn(styles.wrapper, className)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`${styles.tooltip} ${styles[direction || "top"]}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
