import { createConnection } from "mysql";

const db = createConnection({ 
    user : 'root',
    password: '',
    database: 'usuarios'
});

db.connect((err)=> {
    if (err){
        console.error('Error de la conexion a la base de datos', err)
        return
    }
    console.log('conectado a la base de datos')
})

//Consulta de la estructura de base de datos
db.query('SELECT* FROM datos', (err, rows) => {

    if(err){
     console.error('Error de consulta de datos:', err)
     return 
    }
    console.log('resultado de la consulta:')
    console.log(rows)
    
})