const productSchema = require("../modules/product");

const getItems = (req, res) => {
  try {
    productSchema.find().then((result) => {
      res.status(200).json({
        message: "All Product data",
        product_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const postItems = (req, res) => {
  try {
    const product_data = productSchema({
      client_logo: req.body.client_logo,
      client_name: req.body.client_name,
      category: req.body.category,
      product_image: req.body.product_image,
      product_title: req.body.product_title,
      product_offer: req.body.product_offer,
      product_link: req.body.product_link,
      product_feature: req.body.product_feature,
      product_offer_title: req.body.product_offer_title,
    });
    product_data.save().then((result) => {
      res.status(200).json({
        message: "product is added...",
        product_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const getIdItems = (req, res) => {
  try {
    productSchema.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "single product...",
        product_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const putItems = (req, res) => {
  try {
    productSchema
      .findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            client_logo: req.body.client_logo,
            client_name: req.body.client_name,
            category: req.body.category,
            product_image: req.body.product_image,
            product_title: req.body.product_title,
            product_offer: req.body.product_offer,
            product_link: req.body.product_link,
            product_feature: req.body.product_feature,
            product_offer_title: req.body.product_offer_title,
          },
        }
      )
      .then((result) => {
        res.status(200).json({
          message: "product is updated...",
          product_data: result,
        });
      });
  } catch (error) {
    res.send(error);
  }
};

const deleteItems = (req, res) => {
  try {
    productSchema.findByIdAndRemove({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "delete product...",
        product_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getItems,
  postItems,
  getIdItems,
  putItems,
  deleteItems,
};
