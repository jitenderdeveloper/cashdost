const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')


router.get('/register', userControllers.getItems)

router.post("/login", userControllers.loginpostItems);

router.post("/register", userControllers.registerpostItems);


module.exports = router;