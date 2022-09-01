import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { useState, useEffect, FC, useCallback } from 'react';

import { AUTHOR, Message, Messages } from './types';

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  }, []);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.BOT,
          value: 'Im BOT',
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [messages, addMessage]);

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
