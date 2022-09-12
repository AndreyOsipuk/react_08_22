import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { AUTHOR } from 'src/types';
import style from './ChatPage.module.scss';

import { WithClasses } from './../../HOC/WithClasses';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import { addMessage } from 'src/store/messages/actions';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            value: 'Im BOT',
          })
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, dispatch]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
