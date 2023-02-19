const offerSchema = require("../modules/offersSchema");

const getItems = (req, res) => {
  try {
    offerSchema.find().then((result) => {
      res.status(200).json({
        message: "offer schema is done.",
        offer_data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const postItems = (req, res) => {
  try {
    const offer_data = offerSchema({
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
        offer_data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
};

const getIdItems = (req, res) => {
  try {
    offerSchema.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "offer get using by id",
        offer_data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
};

const putItems = (req, res) => {
  try {
    offerSchema
      .findByIdAndUpdate(
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
          offer_data: result,
        });
      });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
};

const deleteItems = (req, res) => {
  try {
    offerSchema.findByIdAndRemove({ _id: req.params.id }).then((result) => {
      // console.log(result)
      res.status(200).json({
        message: "Offers is deleted..",
        offer_data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      mmessage: error,
    });
  }
};



module.exports = {
  getItems,
  postItems,
  getIdItems,
  putItems,
  deleteItems,
};
