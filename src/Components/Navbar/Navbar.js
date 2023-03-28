import React from 'react';
import { Link } from "react-router-dom";
import { useStateReducer } from '../../Resources/StateReducer';

const IsLogged = ({ dispatch }) => {
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return(
    <div class="row justify-content-between">
      <div class="col">
        <h1 className='text-2xl lg:text-2xl font-semibold font-serif py-2 text-white'>
          <Link class="link-light text-decoration-none" to="/">Mi Perfil</Link>
        </h1>
      </div>
      <div class="col">
        <h1 className='text-2xl lg:text-2xl font-semibold font-serif py-2 text-white'>
          <Link class="link-light text-decoration-none" to="/" onClick={handleLogout}>Salir</Link>
        </h1>
      </div>
    </div>
  );
};

const IsNotLogged = () => {
  return(
    <div class="row justify-content-between">
      <div class="col">
        <h1 className='text-2xl lg:text-2xl font-semibold font-serif py-2 text-white'>
          <Link class="link-light text-decoration-none" to="/register">Registrarse</Link>
        </h1>
      </div>
      <div class="col">
        <h1 className='text-2xl lg:text-2xl font-semibold font-serif py-2 text-white'>
          <Link class="link-light text-decoration-none" to="/login">Ingresar</Link>
        </h1>
      </div>
    </div>
  );
}

export default function Navbar() {

  const [state, dispatch] = useStateReducer();

  return (
    <div className="bg-black d-flex align-items-center justify-content-center">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row justify-content-between">
          <div class="col input-group h-50">
            <input type="search" class="form-control rounded" />
            <button type="button" class="btn btn-outline-dark btn-light">
              Buscar
            </button>
          </div>
          <div class="row justify-content-between">
            {state.isLoggedIn ? <IsLogged dispatch={dispatch}/> : <IsNotLogged />}
          </div>
        </div>
      </div>
    </div>
  );
}