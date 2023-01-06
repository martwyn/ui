import cuid from "cuid";
import useConnection from "./useConnection";
import useMessages from "./useMessages";

const useChat = () => {
  const { messages, addMessage } = useMessages();
  const [_isConnected, sendEvent] = useConnection();
  const sendChatMessages = (minimumMessagesToSend: number = 5) => {
    const numberOfMessages =
      minimumMessagesToSend > 5 ? minimumMessagesToSend : minimumMessagesToSend;
    const newMessage: MartwynMessage = {
      id: cuid(),
      userId: "martwyn",
      name: "Martwyn",
      createdAt: new Date(),
    };
    const messagesToSend = messages.slice(numberOfMessages * -1);
    sendEvent("chat", {
      id: newMessage.id,
      messages: messagesToSend,
    });
    addMessage(newMessage);
  };

  return [sendChatMessages];
};

export default useChat;
