let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
    

// Instrumento Model
let InstrumentoSchema = require('../models/Instrumento.js');


// CREATE usuario
//Consultar Enrutamiento

//Crear imagen y entrada

router.route('./crear-instrumento').post((req,res,next)=>{
    InstrumentoSchema.create(req.body, (error, data)=>{

        if(error){
            return next(error)
        }else{

            consola.log(req.file);
            res.json(data);
        }


    })

});


router.route('/crear-instrumento').post((req, res, next) => {
    InstrumentoSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

module.exports = router;
