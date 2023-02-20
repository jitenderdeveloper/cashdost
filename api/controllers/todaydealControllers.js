const todayDeals = require("../modules/todaydeals");

const getItems = (req, res) => {
  try {
    todayDeals.find().then((result) => {
      res.status(200).json({
        message: "today deals schema is done.",
        today_deals_data: result,
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
    const today_deals_data = todayDeals({
      image: req.body.image,
      Company_logo: req.body.Company_logo,
      paragraph: req.body.paragraph,
      offer: req.body.offer,
      redirect_link: req.body.redirect_link,
    });
    today_deals_data.save().then((result) => {
      res.status(200).json({
        message: "today deals data is post",
        today_deals_data: result,
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
    todayDeals.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "today deals get using by id",
        today_deals_data: result,
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
    todayDeals
      .findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            image: req.body.image,
            Company_logo: req.body.Company_logo,
            paragraph: req.body.paragraph,
            offer: req.body.offer,
            redirect_link: req.body.redirect_link,
          },
        }
      )
      .then((result) => {
        res.status(200).json({
          message: "today deals get using by id",
          today_deals_data: result,
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
    todayDeals.findByIdAndRemove({ _id: req.params.id }).then((result) => {
      // console.log(result)
      res.status(200).json({
        message: "today deals is deleted..",
        today_deals_data: result,
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
