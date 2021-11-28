const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InstrumentoSchema = new Schema({
    name: {
        type: String
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Photo"
    }],
    rollno: {
        type: Number
    }
},{
 
    collection: 'instrumentos' //Colleción 
})

    //Creación de datos del esquema
module.exports = mongoose.model('Instrumento', InstrumentoSchema)












