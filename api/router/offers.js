const express = require("express");
const router = express.Router();
const OfferSchema = require("../modules/offersSchema");

router.get("/", (req, res) => {
  try {
    OfferSchema.find().then((result) => {
      res.status(200).json({
        message: "offer schema is done.",
        Offer_Result: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
});
router.post("/", (req, res) => {
  try {
    const offer_data = OfferSchema({
      Company_offer: req.body.Company_offer,
      Company_paragraph: req.body.Company_paragraph,
      Company_logo: req.body.Company_logo,
      paragraph: req.body.paragraph,
      self_offer: req.body.self_offer,
      redirect_link: req.body.redirect_link,
    });
    offer_data.save().then((result) => {
      res.status(200).json({
        message: "offer data is post",
        Offer_Result: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
});

router.get("/:id", (req, res) => {
  try {
    OfferSchema.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "offer get using by id",
        Offer_Result: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
});

router.put("/:id", (req, res) => {
  try {
    OfferSchema.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Company_offer: req.body.Company_offer,
          Company_paragraph: req.body.Company_paragraph,
          Company_logo: req.body.Company_logo,
          paragraph: req.body.paragraph,
          self_offer: req.body.self_offer,
          redirect_link: req.body.redirect_link,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        message: "offer get using by id",
        Offer_Result: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
});


router.delete("/:id", (req, res) => {
    try {
      OfferSchema.findByIdAndRemove({_id: req.params.id})
      .then((result) => {
        // console.log(result)
        res.status(200).json({
          message: "Offers is deleted..",
          Offer_Result: result,
        });
      });
    } catch (error) {
      res.status(400).json({
        mmessage: error,
      });
    }
});



module.exports = router;
