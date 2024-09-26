import mongoose, { Mongoose } from "mongoose";

const DB_URI='mongodb://localhost:27017/clientes';

mongoose.connect(DB_URI)
.then (()=>{
    console.log('conectado a la base de datos')
})
.catch((err)=>{
    console.error('error al conectar la bases de datos')

})

//Consulta 

const usuariosShema= new mongoose.Schema({
    Nombre: {type: String, required: true},
    Email: {type: String, required: true},
    Edad: {type: Number, required: true},

});

const usuarios = mongoose.model('usuarios', usuariosShema);
usuarios.find()
.then ((usuarios) =>{
    console.log('usuarios encontrados', usuarios)
})
.catch((err)=>{
    console.error('error de consulta',err)

})