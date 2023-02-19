const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    client_logo: {
      type: String,
      required: true,
    },
    price_title: {
      type: String,
      required: true,
    },
    offer_description: {
      type: String,
      required: true,
    },
    upto_offer: {
      type: String,
      required: true,
    },
    store_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("client", clientSchema);
