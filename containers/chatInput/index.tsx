import cn from "classnames";
import SendIcon from "../../svgs/send.svg";
import useMessages from "../../hooks/useMessages";
import useUser from "../../hooks/useUser";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import useChat from "../../hooks/useChat";
import cuid from "cuid";
import Tooltip from "../../components/tooltip";

interface Props {
  className?: string;
}

const ChatInput = ({ className }: Props) => {
  const [sendChatMessages] = useChat();
  const [body, setBody] = useState("");
  const [messagesSinceLastSend, setMessagesSinceLastSend] = useState(0);
  const { user } = useUser();
  const { addMessage } = useMessages();

  const callback = useCallback(() => {
    if (messagesSinceLastSend) {
      sendChatMessages();
      setMessagesSinceLastSend(0);
    }
  }, [messagesSinceLastSend]);
  useEffect(() => {
    const timeout = window.setTimeout(callback, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [body]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!body.length) {
      return;
    }
    const newMessage: UserMessage = {
      id: cuid(),
      userId: user.id!,
      name: user.name!,
      body: body,
      createdAt: new Date(),
    };
    addMessage(newMessage);
    setMessagesSinceLastSend(messagesSinceLastSend + 1);
    setBody("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  return (
    <>
      <form
        className={cn("relative flex w-full", className)}
        onSubmit={onSubmit}
      >
        <input
          className={`bg-chat-author-bg pl-4 p-2 rounded-full flex-grow h-12
          `}
          autoComplete="no"
          type="text"
          name="message"
          placeholder="New Message"
          onChange={onChange}
          value={body}
        />

        <button className="absolute flex items-center justify-center w-8 h-8 rounded-full text-icon hover:text-icon-hover right-4 top-2">
          <Tooltip text="Send message" direction="left">
            <SendIcon />
          </Tooltip>
        </button>
      </form>
    </>
  );
};

export default ChatInput;
