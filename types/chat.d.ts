type UserMessage = {
  id: string;
  userId: string;
  name: string;
  body: string;
  createdAt: Date;
};

type MartwynMessage = {
  id: string;
  userId: "martwyn";
  name: "Martwyn";
  body?: string;
  createdAt: Date;
};

type Message = UserMessage | MartwynMessage;

type MessageResponse = {
  id: string;
  response: string;
};
