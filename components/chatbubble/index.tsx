import cn from "classnames";
import { Fragment, ReactNode } from "react";
import ChatFailed from "../chatFailed";
import ChatPending from "../chatPending";
import Timestamp from "../timestamp";
import Tooltip from "../tooltip";
import styles from "./styles.module.css";

interface Props {
  previousMessage?: Message;
  message: Message;
  nextMessage?: Message;
}

type Classes = {
  [key: string]: {
    container: string;
    avatar: string;
    bubble: string;
  };
};

const fiveMinuteMillis = 300000;
const fiveSecondMillis = 5000;
const userClasses: Classes = {
  martwyn: {
    container: `flex-row-reverse text-right ml-20 ${styles.martwyn}`,
    avatar: "ml-4",
    bubble: "bg-chat-bot-bg text-chat-bot-text",
  },
  user: {
    container: `text-left mr-20 ${styles.user}`,
    avatar: "mr-4",
    bubble: "bg-chat-author-bg text-chat-author-text",
  },
};

const previousMessageIsSameUser = ({ previousMessage, message }: Props) => {
  return previousMessage?.userId === message.userId;
};
const nextMessageIsSameUser = ({ nextMessage, message }: Props) => {
  return nextMessage?.userId === message.userId;
};
const assumeMessageHasFailed = (message: MartwynMessage) => {
  return timeHasPassed(
    message.createdAt.getTime(),
    new Date().getTime(),
    fiveSecondMillis
  );
};
const timeHasPassed = (
  beforeTime: number,
  afterTime: number,
  millis: number
) => {
  return Math.abs(afterTime - beforeTime) > millis;
};
const timeBefore = ({ previousMessage, message }: Props) => {
  if (!previousMessage) {
    return true;
  }

  return timeHasPassed(
    message.createdAt.getTime(),
    previousMessage.createdAt.getTime(),
    fiveMinuteMillis
  );
};
const timeAfter = ({ message, nextMessage }: Props) => {
  if (!nextMessage) {
    return false;
  }

  return timeHasPassed(
    nextMessage.createdAt.getTime(),
    message.createdAt.getTime(),
    fiveMinuteMillis
  );
};

const ChatBubble = ({ previousMessage, message, nextMessage }: Props) => {
  const classes = userClasses[message.userId] || userClasses["user"];
  const prevSameUser = previousMessageIsSameUser({
    previousMessage,
    message,
  });
  const nextSameUser = nextMessageIsSameUser({
    message,
    nextMessage,
  });
  const showTimeBefore = timeBefore({ previousMessage, message });
  const showTimeAfter = timeAfter({ message, nextMessage });
  const containerClasses = cn("flex mb-4 items-end", classes.container, {
    [styles["same-prev-author"]]: prevSameUser,
    [styles["same-next-author"]]: nextSameUser,
    "mb-1": nextSameUser,
    "mb-4": !nextSameUser,
    [styles["time-before"]]: showTimeBefore,
    [styles["time-after"]]: showTimeAfter,
  });

  let body: ReactNode = message.body;
  if (message.userId === "martwyn" && !message.body) {
    body = assumeMessageHasFailed(message as MartwynMessage) ? (
      <ChatFailed />
    ) : (
      <ChatPending />
    );
  }

  return (
    <>
      {showTimeBefore && <Timestamp datetime={message.createdAt} />}
      <div className={containerClasses}>
        {prevSameUser && !showTimeBefore ? (
          <span className={`flex-shrink-0 w-8 ${classes.avatar}`} />
        ) : (
          <span
            className={`self-end flex-shrink-0 w-8 h-8 ${classes.avatar} rounded-full bg-chat-author-bg`}
          />
        )}
        <div className="flex-grow">
          <p
            className={`text-left inline-block py-2 px-4 rounded-3xl ${classes.bubble} ${styles.bubble}`}
          >
            {typeof body === "string" ? (
              body.split("\n").map((b, i) => {
                return (
                  <Fragment key={i}>
                    {b}
                    {i !== 0 && <br />}
                  </Fragment>
                );
              })
            ) : (
              <>{body}</>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
