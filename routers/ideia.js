const express = require('express');
const mongoose = require('mongoose');
const Ideia = require('../models/Ideia');
const router = express.Router();


//Add Ideia
router.post('/newideia', async function(req, res, next){

    newIdeia = req.body;

    var ideia = new Ideia({
        name: newIdeia.name,
        title: newIdeia.title,
        description: newIdeia.description
    });

    ideia.save(function(err, result){
        if(err){
            return res.status(500).json({
                erroTitle: 'Houve um erro ao salvar.',
                error: err
            });
        }

        res.status(200).json({
            msgSucesso: 'Ideia Salva com sucesso!',
            objSalvo: result
        });
    });
});



//Coletar todas as ideias
router.get('/', function(req, res,next){
    Ideia.find().exec(function(err, result){
        if(err){
            return res.status(500).json({
                erro:'Erro ao buscar ideias.'
            });
        };

        return res.status(200).json({
            msgSucesso: 'Sucesso ao buscar todas ideas.',
            objReturn: result
        });
    });
});

module.exports = router;