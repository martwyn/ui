import { useEffect, useState } from "react";
import io from "socket.io-client";
import useCustomPersonality from "./usePersonality";
import useMessages from "./useMessages";
import useUser from "./useUser";
import useOpenAiApiKey from "./useOpenAIApiKey";

const socket = io(`${process.env.NEXT_PUBLIC_WS_HOST}`);
const useConnection = () => {
  const { updateMessageBody } = useMessages();
  const { personality } = useCustomPersonality();
  const { openAiApiKey } = useOpenAiApiKey();
  const { user } = useUser();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const onResponse = (messageResponse: MessageResponse) => {
    updateMessageBody(messageResponse.id, messageResponse.response);
  };
  useEffect(() => {
    if (user.id) {
      socket.emit("authenticate", { userId: user.id });
    }
  }, [user.id]);

  useEffect(() => {
    socket.on("connect", () => {
      if (user.id) {
        socket.emit("authenticate", { userId: user.id });
      }
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      console.log("Pong!");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  useEffect(() => {
    socket.on("response", onResponse);
    return () => {
      socket.off("response");
    };
  });

  const sendEvent = (name: string, eventData: any = {}) => {
    const eventDataWithUser = {
      ...eventData,
      userId: user.id,
      openAiApiKey,
    };

    if (personality.text.length) {
      eventDataWithUser.personality = personality.text;
    }

    socket.emit(name, eventDataWithUser);
  };

  return [isConnected, sendEvent] as const;
};

export default useConnection;
