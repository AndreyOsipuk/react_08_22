import { useCallback, useState, useRef, useEffect } from 'react';
import { Child } from './Child';

export const Form = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const buttonEl = useRef(null);

  const handleChangeCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  useEffect(() => {
    console.log('ref', buttonEl);
  }, []);

  return (
    <>
      <h3>Parent component</h3>
      <p>{count}</p>
      <button ref={buttonEl} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'visible'}
      </button>
      <h3>Child component</h3>
      {visible && <Child value={0} changeCount={handleChangeCount} />}
    </>
  );
};
