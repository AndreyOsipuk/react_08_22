import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import style from './ChatPage.module.scss';

import { WithClasses } from './../../HOC/WithClasses';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC<any> = ({ chats, messages }) => {
  const { chatId } = useParams();
  // const MessageListWithClass = WithClasses(MessageList);
  // const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  const prepareMessages = [
    ...Object.values((chatId && messages[chatId].messages) || {}),
  ];

  return (
    <>
      <ChatList chats={chats} />
      <MessageList messages={prepareMessages} />
      {/* <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      /> */}
      <Form />
    </>
  );
};
