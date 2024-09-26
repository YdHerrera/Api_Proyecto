import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logueado, setLogueado] = useState(false)
  
  async function iniciarSesion(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login?usuario=' + usuario + '&contraseña=' + contraseña);
      if (response.ok) { // Verifica si la API devuelve un indicador de éxito
        alert('Inicio de sesión correcto');
        setLogueado(true);
      } else {
        alert('Error de inicio de sesión: Usuario o contraseña incorrectos');
      }
    } catch (error) {
  
      alert('Hubo un problema con la conexión al servidor');
      console.error('Error:', error); 
    }
  }

  // async function iniciarSesion() { // Cambié el nombre aquí
  //   const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&contraseña=' + contraseña);
  //   if (peticion.ok) {
  //     alert('Usuario conectado');
  //     setLogueado(true);
  //   } else {
  //     alert('Usuario no registrado');
  //   }
  // }

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="text-center">
            <div className="tagline">INVENTARIO YEDAPP</div>
            <p>Lleva tu negocio a otro nivel</p>
          </div>
          <div className="card" >
            <div className="card-body">
              <h1 className="card-title text-center">Inicio de Sesión</h1>
              <form onSubmit={iniciarSesion}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingresa tu correo" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Ingresa tu contraseña" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                  />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Recordar contraseña</label>
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option>Administrador</option>
                    <option>Usuario</option>
                  </select>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  <button type="button" className="btn btn-secondary">Contactanos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="login-image">
  <img src="/login.jpg" alt="Login Image" style={{ width: '100%', height: 'auto' }} />
</div>

      </div>
    </>
  )
}

export default App




