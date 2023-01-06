import Spinner from "../spinner";

interface Props {
  className?: string;
}
const ChatPending = ({ className }: Props) => {
  return (
    <span className={className}>
      <Spinner size="sm" />
    </span>
  );
};

export default ChatPending;
