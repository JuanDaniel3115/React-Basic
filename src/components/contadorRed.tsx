import { useReducer } from "react";

const initialState = {
  contador: 0,
};
type ActionType = 
    | { type: 'incrementar' }
    | { type: 'decrementar'}
    | { type: 'custom', payload: number};


const contadorReducer = (state: typeof initialState, action: ActionType) => {
  //siempre retorna un nuevo estado
  switch (action.type) {
    case 'incrementar':
      //... realiza una copia del estado y modifica el valor del contador
      return {
        ...state,
        contador: state.contador + 1
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      }

    case 'custom':
      return {
        ...state,
        contador: action.payload
      }

    default:
      return state;

  }
}

export const ContadorRed = () => {
  //contadorState es el estado actual
  //dispatch es una funcion que ejecuta el contadorReducer 

  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h2>Contador: {contadorState.contador}</h2>

      <button
        onClick={() => dispatch({ type: 'incrementar' })}
        className="btn btn-outline-primary">
        +1
      </button>

      <button
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
        className="btn btn-outline-primary">
        -1
      </button>
    </>
  )
}
export default ContadorRed;