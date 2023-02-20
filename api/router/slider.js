const express = require("express");
const router = express.Router();
const sliderController = require('../controllers/sliderControllers')

router.get("/",sliderController.getItems);

router.post("/", sliderController.postItems);

router.get("/:id", sliderController.getIdItems);

router.put("/:id", sliderController.putItems);

router.delete("/:id", sliderController.deleteItems);



module.exports = router;
