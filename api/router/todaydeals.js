const express = require("express");
const router = express.Router();
const todayDealsController = require('../controllers/todaydealControllers')

router.get("/", todayDealsController.getItems);

router.post("/", todayDealsController.postItems);

router.get("/:id", todayDealsController.getIdItems);

router.put("/:id", todayDealsController.putItems);

router.delete("/:id", todayDealsController.deleteItems);


module.exports = router;
