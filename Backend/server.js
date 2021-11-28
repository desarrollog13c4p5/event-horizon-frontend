let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let morgan = require('morgan');
let multer = require('multer')
let path = require ('path');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route

//Inicialización.

const instrumentoRoute = require('../backend/routes/instrumento.route')
const userRoute = require('../backend/routes/user.route')


const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true

        }
    )
);


//Configuración
app.set('port', process.env.PORT || 4000 );  //Variable de puerto global
app.set('Vistas', path.join(__dirname, 'Vistas')); // Mapeo de enrutamiento de vistas 
app.set('Vistas engine', 'ejs'); // Desaclaración de EJS

//Middlewares
//multer
let fileStorageEngine = multer.diskStorage({
destination: (req, file, cb) =>{
 cb(null, "defaultPublic/img/uploads")
},
filename:(req, file, cb) => {
    cb(null, Date.now() + "--" +file.originalname);
},
});

const upload =multer ({storage: fileStorageEngine});

//Funciones que procesan cosas antes de que lleguen a las rutas 
app.use(cors());
app.use(express.urlencoded({extended :false})) //Permite enterder lo que lo formularios envian // Entended False para recivir datos no dificiles
app.use(multer({dest: path.join(__dirname, 'defaultPublic/img/uploads')}).single('image')); // Utilizado para enrutar la imagen y denominarle un nombre con multe.con join crea las carpetas si no existen
app.use(morgan('dev'));



//Routes / rutas

app.use('/Instrumento', instrumentoRoute)       //Peticiones de enrutamiento
app.use('/Usuario', userRoute)

//Archivos estaticos 

//Start Server

// PORT
        //Conexión a puerto
        app.listen(app.get('port'), () => {
        console.log('Conexión al puerto ' + app.get('port'));  
    });

// Connecting mongoDB Database

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true

}).then(() => {
    console.log('Database sucessfully connected!')
},
    error => {
        console.log('Could not connect to database : ' + error)
    }
)

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

