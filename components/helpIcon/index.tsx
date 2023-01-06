import cn from "classnames";
import { ReactNode, useState } from "react";
import Modal from "../modal";
import QuestionIcon from "../../svgs/question.svg";

interface Props {
  className?: string;
  children: ReactNode;
}

const HelpIcon = ({ children, className }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <QuestionIcon
        className={cn(
          className,
          "w-4 h-4 cursor-pointer text-icon hover:text-icon-hover"
        )}
        onClick={toggleModalVisible}
      />
      {modalVisible && (
        <Modal className="max-w-96" onClose={toggleModalVisible}>
          {children}
        </Modal>
      )}
    </>
  );
};
export default HelpIcon;
