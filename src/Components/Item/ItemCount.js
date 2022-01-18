import { useCounter } from "../hooks/useCounter";
 import { useState } from "react";

  const ItemCount = ({ inicial }) => {
      const {counter, increment, decrement, reset } = useCounter(inicial)

      return (

           <div >
              <h1>{counter}</h1>
              <button onClick={() =>increment(2)}>+</button>
              <button onClick={decrement}>-</button>
              <button onClick={reset}>Reset</button>
           </div>
      )
  }

  export default ItemCount 