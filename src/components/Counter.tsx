import React, { useState } from 'react';

const Counter = () => {
  // [Getter, Setter] = useState(Valor inicial)
  //[valor, funcion que cambia el valor]
  const [counter, setcounter] = useState(0);

  const increment = (numero: number = 1): void => {

    setcounter(counter + numero);

  }

  return (
    <div className='mt-5'>
      <h3>Counter: useState</h3>
      <span> Valor {counter}</span>
      <br />
      <button className='btn btn-outline-primary mt-2' onClick={() => increment()}>
        +1
      </button>

      <button className='btn btn-outline-primary mt-2' onClick={() => increment(2)}>
        +2
      </button>

      <button className='btn btn-outline-primary mt-2' onClick={() => setcounter(0)}>
        Reset
      </button>

    </div>
  );
}

export default Counter;