const express = require('express');
const mongoose = require('mongoose');
const Problema = require('../models/Problema');
const router = express.Router();


//Add Ideia
router.post('/newproblema', async function(req, res, next){

    newProblema = req.body;

    var problema = new Problema({
        name: newProblema.name,
        title: newProblema.title,
        description: newProblema.description
    });

    problema.save(function(err, result){
        if(err){
            return res.status(500).json({
                erroTitle: 'Houve um erro ao salvar.',
                error: err
            });
        }

        res.status(200).json({
            msgSucesso: 'Problema Salvo com sucesso!',
            objSalvo: result
        });
    });
});



//Coletar todos problema
router.get('/', function(req, res,next){
    Problema.find().exec(function(err, result){
        if(err){
            return res.status(500).json({
                erro:'Erro ao buscar problema.'
            });
        };

        return res.status(200).json({
            msgSucesso: 'Sucesso ao buscar todas os problemas.',
            objReturn: result
        });
    });
});

module.exports = router;