const express = require("express");
const router = express.Router();
const OfferSchema = require("../modules/offersSchema");

router.get("/", (req, res) => {
  try {
    res.send('api is working...')
  } catch (error) {
    res.status(400).json({
      message: `api is not working ERROR ${error}`,
    });
  }
});


module.exports = router;