import express from "express";
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'  
}));

// Crear pool de conexiones a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // Cambia esto si tienes otro usuario configurado
    password: '',  // Si tienes una contraseña en tu MySQL, cámbialo aquí
    database: 'adso', // Asegúrate de que este sea el nombre correcto de la base de datos
});

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => res.send("Hey"));

// Ruta para manejar el inicio de sesión
app.get('/login', async (req, res) => {
    const datos = req.query; // Datos recibidos del frontend
    try {
        // Consulta SQL para verificar si el usuario existe con los datos proporcionados
        const [results] = await pool.query(
            "SELECT * FROM `usuarios` WHERE `correo` = ? AND `contraseña` = ?",
            [datos.usuario, datos.contraseña]  // Parámetros seguros
        );
        // Validar si se encontró el usuario
        if (results.length > 0) {
            res.status(200).send('Inicio de sesión correcto');
        } else {
            res.status(401).send('Error al iniciar sesión: Usuario o contraseña incorrectos');
        }

        console.log(results); // Imprimir los resultados para verificar
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).send('Error interno del servidor');
    }
    console.log(datos);
});

// Ruta para validar la sesión (puedes implementar lógica extra si es necesario)
app.get('/validar', (req, res) => {
    res.send('Sesión válida');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});




















