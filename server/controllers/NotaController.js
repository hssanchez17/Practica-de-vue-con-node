const model =require('../models')
module.exports={

    store(req,res){
        model.Nota.create({ 
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: 1,
            activo: req.body.activo
        }).then(function(nota){
            res.status(200).json(nota)
        }).error(function(){
            res.status(500).json({
                mensaje:'Ocurrio un error',
                error
            })
        })
    },

    show(req,res){
        const _id=req.params.id

        try{
            model.Nota.findAll({
                where: { id:_id}
            }).then(function(nota){
                res.status(200).json(nota)
            })
        }catch(error){
            res.status(500).json({
                mensaje:'Ocurrio un error',
                error})
        }
    },

    index(req,res){
        model.Nota.findAll()

        .then(function(notas){
            res.status(200).json(notas)
        })
        .catch(e=>{
            res.status(500).json({
             mensaje:'Ocurrio un error',
                e})
    })
    },

    update(req,res){
        model.Nota.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: 1,
            activo: req.body.activo},
            {returning: true, where: {id:req.body.id} }
        )
        .then(function(notas){
            res.status(200).json(notas)
        })
        .catch(e=>{
            res.status(500).json({
                mensaje:'Ocurrio un error',
                e})
        })
    },

    delete(req,res){
        model.Nota.destroy({
            where: {
                id:req.params.id
            }
        })
        .then(function(notas){
            res.status(200).json(notas)
        })
        .catch(e=>{
            res.status(500).json({
                mensaje:'Ocurrio un error',
                e
            })
        })
    }
    


}