export interface Message {
  author: AUTHOR;
  value: string;
}

export interface MessageWIthId extends Message {
  id: string;
}

export type Messages = Record<string, Message[]>;
export type MessagesWithId = Record<string, MessageWIthId[]>;

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}

export interface Chat {
  id: string;
  name: string;
}
