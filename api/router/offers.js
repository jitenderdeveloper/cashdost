const express = require("express");
const router = express.Router();
const offerControllers = require('../controllers/offerControllers')
const Authorization = require('../middleware/auth')

router.get("/",Authorization, offerControllers.getItems);

router.post("/", offerControllers.postItems);

router.get("/:id", offerControllers.getIdItems);

router.put("/:id", offerControllers.putItems);

router.delete("/:id", offerControllers.deleteItems);



module.exports = router;
