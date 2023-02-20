const express = require('express');
const router = express.Router()
const productController = require('../controllers/productControllers')

router.get('/', productController.getItems)

router.post('/', productController.postItems)

router.get('/:id', productController.getIdItems)

router.put('/:id', productController.putItems)

router.delete('/:id', productController.deleteItems)


module.exports = router;