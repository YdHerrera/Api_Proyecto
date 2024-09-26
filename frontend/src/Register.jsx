import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Lógica para enviar datos al servidor y registrar al usuario
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, contraseña }),
    });

    if (response.ok) {
      alert('Registro exitoso');
      // Aquí puedes redirigir al usuario o limpiar el formulario
    } else {
      alert('Error al registrar usuario');
    }
  };

  return (
    <BrowserRouter><
    <div className="container mt-5">
      <h1 className="text-center">Registro</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Ingresa tu correo" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Ingresa tu contraseña" 
            value={contraseña} 
            onChange={(e) => setContraseña(e.target.value)} 
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">Registrar</button>
        </div>
      </form>
    </div>
    </BrowserRouter>/BrowserRouter>
  );
}

export default Register;
