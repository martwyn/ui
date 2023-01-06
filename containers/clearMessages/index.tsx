import Tooltip from "../../components/tooltip";
import useMessages from "../../hooks/useMessages";
import TrashIcon from "../../svgs/trash.svg";

const ClearMessage = () => {
  const { clearMessages } = useMessages();
  const onClick = () => {
    clearMessages();
  };
  return (
    <div className="text-right">
      <button
        onClick={onClick}
        type="button"
        className="h-8 mt-1 hover:text-icon-hover text-icon "
      >
        <Tooltip text="Clear messages" direction="left">
          <TrashIcon />
        </Tooltip>
      </button>
    </div>
  );
};

export default ClearMessage;
