import cuid from "cuid";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const messagesAtom = atomWithStorage<Message[]>("messages", []);

const useMessages = () => {
  const [messages, setMessages] = useAtom(messagesAtom);
  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };
  const updateMessageBody = (id: string, body: string) => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].id == id) {
        messages[i].body = body;
        setMessages([...messages]);
      }
    }
  };
  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages: messages.map((m) => ({
      ...m,
      createdAt: new Date(m.createdAt),
    })), // Hmmm, think I'm going to need to fix this up, this is dumb
    addMessage,
    clearMessages,
    updateMessageBody,
  } as const;
};

export default useMessages;
