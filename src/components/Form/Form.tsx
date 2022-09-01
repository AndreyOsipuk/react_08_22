import { FC, useState, memo } from 'react';
import TextField from '@mui/material/TextField';

import { Button } from './components/Button';
import { AUTHOR, Message } from 'src/types';

interface FormProps {
  addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    addMessage({
      author: AUTHOR.USER,
      value,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={(e) => setValue(e.target.value)} />
      <Button label="send" disabled={!value} />
    </form>
  );
});
