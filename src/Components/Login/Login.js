import React from 'react';

export default function Login({ onLogin }) {

  const collectData = () => {
    return {
      user: document.getElementById("user").value,
      password: document.getElementById("password").value
    };
  }

  return(
    <div class="d-flex align-items-center justify-content-center">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Inicio de sesión</h5>
          </div>
          <ul class="list-group list-group-flush d-flex align-items-center">
            <li class="form-floating list-group-item">
              <input id="user" type="text" class="form-control" placeholder='Usuario'></input>
              <label for="user"> Usuario </label>
            </li>
            <li class="form-floating list-group-item">
              <input id="password" type="password" class="form-control" placeholder='Contraseña'></input>
              <label for="password"> Contraseña </label>
            </li>
            <li class="list-group-item">
              <button class="btn btn-outline-dark btn-light" onClick={() => onLogin(collectData())}>
                Ingresar
              </button>
            </li>
          </ul>
        </div>
      </div>
  );
}