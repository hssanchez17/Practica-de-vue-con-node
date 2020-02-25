import express from 'express';
const router=express.Router();
const notaController=require('./controllers/NotaController')

//Endpoints de notas
router.post('/nueva-nota',notaController.store);
router.get('/nota/:id',notaController.show)
router.get('/nota',notaController.index)
router.put('/nota/:id',notaController.update)
router.delete('/nota/:id',notaController.delete)

module.exports =router;