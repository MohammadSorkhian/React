import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => { 

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decrementHandler}>-</button>
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
      <button onClick={incrementHandler}>+</button>
    </main>
  );
};

export default Counter;
