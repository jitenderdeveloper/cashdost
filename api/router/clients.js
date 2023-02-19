const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientControllers')

router.get('/', clientController.getItems)

router.post('/', clientController.postItems)

router.get('/:id', clientController.getIdItems)

router.put('/:id', clientController.putItems)

router.delete('/:id', clientController.deleteItems)

module.exports = router;