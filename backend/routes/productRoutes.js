const express = require('express');

const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers');

//@desc GET all products from Db
//@route GET /api/productsData
//@access Puclic
router.get('/',getAllProducts)

//@desc Get a product by id from Db
//@route GET /api/products/:id
//@access Public

router.get(':/id',  getProductById)

module.exports = router;