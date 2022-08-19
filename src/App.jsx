import { Form } from './components/Form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

import './index.css'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="Form" >
      <h2 style={{ backgroundColor: 'green'}}>Classs components</h2>
      <CountClass count={10} />
      <hr />
      <FormClass />
      <hr />
      <h2>Func components</h2>
      <Count />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handleChangeName} />
      <h3>Child component</h3>
      <Child name={name} handleChangeCount={setCount} />
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}
      <Form />
    </div>
  );
}

