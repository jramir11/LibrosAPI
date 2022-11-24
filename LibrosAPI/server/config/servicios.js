const Autor = require("../controller/controllers");


module.exports = function(app){

    // muestra TODOS los AUTORES y sus LIBROS
    app.get("/getAllAutor", (req, res) => {   
        Autor.getAllAutor(req, res);
    });
    
    // NUEVO AUTOR
    app.post("/newAutor", (req, res) => {
        Autor.newAutor(req, res);
    });
    
    // ELIMINA AUTOR
    app.delete("/deleteAutor/:id", (req, res) => {
        Autor.deleteAutor(req, res)
    });
    
    // muestra y busca AUTOR por ID
    app.get("/getByIdAutor/:id", (req, res) => {
        Autor.getByIdAutor(req, res);
    });
    
    // UPDATE AUTOR
    app.put("/updateAutor/:id", (req, res) => {   
        Autor.updateAutor(req, res);
    });
    
    
    // MUESTRA TODOS LOS LIBROS - Detalle
    app.get("/getAllLibros/:id", (req, res) => {   
        Autor.getAllLibros(req, res);
      });

    // NUEVOS LIBROS
    app.post("/newLibros/:id", (req, res) => {  
        Autor.newLibros(req, res);
    });

        // ACTUALIZA LIBROS POR ID
    app.put("/updateLibros/:id", (req, res) => {   
        Autor.updateLibros(req, res);
      });


    // DELETE LIBROS POR ID
    app.patch("/deleteLibros/:id", (req, res) => {
        Autor.deleteLibros(req, res)
    });

}