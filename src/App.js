import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { useStateReducer } from "./Resources/StateReducer";


function App() {

  const [users, setUsers] = useState([]);

  const [state, dispatch] = useStateReducer();

  const onAdd = (user) => {
    setUsers([...users, user]);
    alert("Registro exitoso")
  }

  const logIn = (user) => {
    if(users.length == 0)
      return;
    if(users.filter(x => x.user === user.user)[0].password == user.password) {
      alert("Se ha loggeado")
      dispatch({type : 'LOGIN', payload: user.user})
    }
    else
      alert("Ingreso fallido")
  }

  return (
    <div className="App">
      <Router>
          <Header />
          <Navbar />
            <Routes>
              <Route path="/" element={<Shop/>} />
              <Route path="/login" element={<Login onLogin={logIn}/>} />
              <Route path="/register" element={<Register onAdd={onAdd}/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
