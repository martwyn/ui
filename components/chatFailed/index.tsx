interface Props {
  className?: string;
}

const ChatFailed = ({ className }: Props) => {
  return <span className={className}>Something went wrong, try again</span>;
};

export default ChatFailed;
