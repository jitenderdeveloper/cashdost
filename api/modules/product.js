const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    client_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    product_image: {
      type: String,
      // required: true,
    },
    product_title: {
      type: String,
      required: true,
    },
    product_offer: {
      type: String,
      required: true,
    },
    product_link: {
      type: String,
      required: true,
    },
    product_feature: {
      type: String,
      required: true,
    },
    product_offer_title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", product);
