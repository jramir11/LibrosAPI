
const mongoose = require('mongoose')

//Generamos un esquema de objeto JSON que almacenaremos
const AutorSchema = new mongoose.Schema(
    {
    nombreAutor: {type: String, require: [true, 'Nombres Obligatorio'], minlength:[2,"Nombres minimo 2 letras"]},
    apellidoAutor: {type: String, require: [true, 'Apellidos Obligatorio'], minlength:[2,"Apellidos minimo 2 letras"]},
    paisAutor: {type: String, minlength:[3,"Pais minimo 3 letras"]},
    cumpleanosAutor: {type: Date},
    libros: [{
        tituloLibro: {type:String, minlength:[2,"Titulo minimo 2 letras"]},
        anoPublicacionLibro: {type:Number}
    }]
    }
);
const Autor = mongoose.model('Autor', AutorSchema);
module.exports = Autor;