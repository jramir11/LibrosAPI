const Autor = require("../model/autor");

module.exports = {

    //MUESTRA TODOS AUTOR
    getAllAutor: async function (req, res) {
      const data = await Autor.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    
    // NUEVO AUTOR
    newAutor: function (req, res) {
      const autors = new Autor();
      autors.nombreAutor = req.body.nombreAutor;   
      autors.apellidoAutor = req.body.apellidoAutor;
      autors.paisAutor = req.body.paisAutor;
      autors.cumpleanosAutor = req.body.cumpleanosAutor;
      const Hoy = new Date();
      if (autors.cumpleanosAutor > Hoy){
          res.status(404).json({ message : "Fecha Debe ser Menor a la Actual"});
      } else {
          autors.save()
            .then((autors) => res.json(autors))
            .catch((err) => {
              res.status(404).json({error:err.message}) });
        }
    },

    //ELIMINA AUTOR
    deleteAutor: function (req, res) {
      let id = req.params.id;
      Autor.deleteOne({ _id: id })
        .then((autor) => res.json(autor))
        .catch((err) => res.json(err));
    },

    // BUSCA AUTOR POR ID
    getByIdAutor: function (req, res) {
      Autor.findOne({ _id: req.params.id })
        .then((autor) => res.json(autor))
        .catch((err) => res.json(err));
    },

    // ACTUALIZA AUTOR
    updateAutor: async function (req, res) {    
      const id = req.params.id;
      const body = req.body;
      const Hoy = new Date();
      if (body.cumpleanosAutor > Hoy){
          res.status(404).json({ message : "Fecha Debe ser Menor a la Actual"});
      } else {
          const data =  await Autor.updateOne({ _id: id } , body )
            .then((autor) => res.json( { message : "success",  autor }))
            .catch((err) => res.json( { message : "fault",  error  : err}));
      }
    },



    // MUESTRA TODOS LOS LIBROS - detalle
    getAllLibros: async (req, res) => {
      const id = req.params.id;
      const data = await Autor.findOne({_id: id})
          .then(data => res.json(data))
          .catch(err => res.json(err));
    },

    // NUEVO LIBRO - Detalle
    newLibros: async function (req, res) {
      const id=req.params.id;
      const tituloLibro=req.body.tituloLibro;
      const anoPublicacionLibro=req.body.anoPublicacionLibro;
      const Hoy = new Date();
      const AnoHoy = Hoy.getFullYear();
      if (anoPublicacionLibro > AnoHoy){
          res.status(404).json({ message : "Año Debe ser Menor o Igual al Actual"});
      } else {
          const data=await Autor.findOneAndUpdate({_id:id},{$push:{libros:{tituloLibro,anoPublicacionLibro}}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
      }
    },

    // UPDATE a LIBROS por ID - Detalle
    updateLibros: async (req, res) => {
      const id = req.params.id;
      const idLibros = req.body._id;
      const tituloLibro=req.body.tituloLibro;
      const anoPublicacionLibro=req.body.anoPublicacionLibro;
      const Hoy = new Date();
      const AnoHoy = Hoy.getFullYear();
      if (anoPublicacionLibro > AnoHoy){
          res.status(404).json({ message : "Año Debe ser Menor o Igual al Actual"});
      } else {
          Autor.updateOne({_id:id, "libros._id":idLibros},
            {$set:{"libros.$.tituloLibro":tituloLibro,"libros.$.anoPublicacionLibro":anoPublicacionLibro}})
              .then(data => res.json(data))
              .catch(err => res.json(err));
      }
    },

    // DELETE LIBRO por ID - Detalle
    deleteLibros: async (req, res) => {
      const id = req.params.id;
      const idLibros = req.body._id;
      Autor.updateOne({ _id: id}, {$pull: {libros: {_id: idLibros}}} )
      .then(data => res.json(data))
      .catch(err => res.json(err));
      }

};
