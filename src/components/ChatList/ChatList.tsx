import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from 'src/store/messages/selectors';
import { set, push, ref, remove } from 'firebase/database';
import { db, getChats } from 'src/services/firebase';
import { nanoid } from 'nanoid';

export const ChatList: FC<any> = ({ chats }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const chats = useSelector(
  //   selectChats,
  //   (prev, next) => prev.length === next.length
  // );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      set(ref(db, `chats/${value}`), {
        id: nanoid(),
        name: value,
      });

      set(ref(db, `messages/${value}`), {
        name: value,
      });
    }
  };

  const handleDelete = (chatName: string) => {
    remove(ref(db, `chats/${chatName}`));
  };

  return (
    <>
      <ul>
        {chats.map((chat: any) => (
          <ListItem key={chat.id}>
            <NavLink
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => handleDelete(chat.name)}>X</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>create chat</button>
      </form>
    </>
  );
};
