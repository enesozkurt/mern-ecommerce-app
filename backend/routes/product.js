const express = require('express')
const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/product/new').post(newProduct);

router.route('/product/:id').put(updateProduct);

router.route('/product/:id').delete(deleteProduct);

module.exports = router;
