var express = require('express')
var app = express();
var router = express.Router();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

global.matrizProductos = [{"id":1,"title":"iPhone 11 64 GB (Product)Red","price":159000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-001.jpg"},
{"id":3,"title":"iPhone 12 64 GB azul","price":200000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-002.jpg"},
{"id":4,"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-003.jpg"},
{"id":5,"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-004.jpg"},
]

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/api/productos', require('../rutas/apiProductos'))
app.use('/productos', require('../rutas/productos'))
app.use('/', router)

app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});

// JSON products para agregar
//{"title":"iPhone 11 64 GB (Product)Red","price":159000,"thumbnail":"a001.jpg"}
//{"title":"iPhone 12 64 GB azul","price":200000,"thumbnail":"a002.jpg"}
//{"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"a003.jpg"}
//{"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"a003.jpg"}
