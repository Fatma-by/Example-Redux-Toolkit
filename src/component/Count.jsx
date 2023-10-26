import react from 'react';
import { increment, decrement } from '../Store';

import { useSelector, useDispatch } from 'react-redux';

function Count() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Count;