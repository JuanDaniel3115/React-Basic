import Counter from "./components/Counter";
import Usuario from "./components/Usuario";

import TimerPadre from "./components/TimerPadre";
import ContadorRed from "./components/contadorRed";


function App() {

  return (
    <>
      <h1> Hola -TS</h1>
      <hr />
      <Counter/>

      <Usuario/>

      <h2> useEffect - useRef</h2>
      <hr />
      <TimerPadre/>

      <h2>useReducer</h2>
      <hr />
      <ContadorRed/>
    </>
  );
}
export default App;
