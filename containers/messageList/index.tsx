import ChatBubble from "../../components/chatbubble";
import useMessages from "../../hooks/useMessages";
import NoChatIcon from "../../svgs/chat.svg";

const MessageList = () => {
  const { messages } = useMessages();
  if (!messages.length) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className=" text-icon-hover">
          <NoChatIcon />
        </div>
        <p className="mt-4 text-icon">Talk to me...</p>
      </div>
    );
  }

  return (
    <div>
      {messages.map((message, i) => (
        <ChatBubble
          key={message.id}
          previousMessage={messages[i - 1]}
          message={message}
          nextMessage={messages[i + 1]}
        />
      ))}
    </div>
  );
};

export default MessageList;
