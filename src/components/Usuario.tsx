
import { useState } from 'react';

interface UserModel {
  id: string;
  name: string;
}
export const Usuario = () => {

  //Hook que identifica el estado del usuario
  const [user, setUser] = useState<UserModel>();

  const Login = () => {
    setUser({
      id: 'ABC123',
      name: 'juan'
    });
  }

  return (
    <div className='mt-5'>
      <h3> Usuario: useState</h3>

      <button
        onClick={Login}
        className='btn btn-outline-primary'>
        Login
      </button>

      {
        (user)
          ? <pre> {JSON.stringify(user)} </pre>
          : <pre> No hay usuario </pre>
      }

    </div>
  )
}


export default Usuario;


