import { ReactNode, useEffect, useRef, useState } from "react";
import useMessages from "../../hooks/useMessages";
import ScrollDownIcon from "../../svgs/scrollDown.svg";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}
const BottomSticker = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showScrolButtom, setShowScrollBottom] = useState(false);
  const { messages } = useMessages();
  const buffer = 240;
  const getDistanceToBottom = () => {
    if (!ref.current) {
      return 0;
    }

    return (
      ref.current.scrollHeight -
      ref.current.clientHeight -
      ref.current.scrollTop
    );
  };
  const scrollToBottom = () => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollTo({
      top: ref.current.scrollHeight,
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  useEffect(() => {
    if (getDistanceToBottom() < buffer) {
      scrollToBottom();
    }
  }, [messages]);
  const onScroll = () => {
    console.log("scroll");
    setShowScrollBottom(getDistanceToBottom() > buffer);
  };

  return (
    <>
      <div
        onScroll={onScroll}
        ref={ref}
        className="relative flex-grow p-4 overflow-y-auto"
      >
        {children}
      </div>
      {showScrolButtom && (
        <button
          type="button"
          title="Scroll to bottom"
          onClick={scrollToBottom}
          className={`absolute hover:text-icon-hover text-icon z-10 ${styles.button}`}
        >
          <ScrollDownIcon />
        </button>
      )}
    </>
  );
};

export default BottomSticker;
