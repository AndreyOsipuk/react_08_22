import { FC, useState, memo } from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

import { Button } from './components/Button';
import { AUTHOR, Message } from 'src/types';

interface FormProps {
  addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      addMessage(chatId, {
        author: AUTHOR.USER,
        value,
      });
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ 'data-testid': 'input' }}
      />
      <Button disabled={!value} render={(label: string) => <div>{label}</div>}>
        send
      </Button>
    </form>
  );
});
