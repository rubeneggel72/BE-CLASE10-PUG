const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    console.log(matrizProductos)
    res.render('index.pug', { products: matrizProductos });
});

module.exports = router