import { useState } from 'react';
import { AUTHOR } from 'src/constants';
import { Button } from './components/Button';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label="send" disabled={!value} />
    </form>
  );
};
