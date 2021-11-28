//Modelo de entrada de datos Squema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        type: Number
    },
    nick: {
        type: String
    },
    passWord:{
        type: String 
    }

}, {
    collection: 'users' //Colleción 
})
                                //Creación de datos del esquema
module.exports = mongoose.model('User', userSchema)