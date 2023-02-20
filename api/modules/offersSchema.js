const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    Company_offer: {
      type: String,
      required: true,
    },
    Company_paragraph: {
      type: String,
      required: true,
    },
    Company_logo: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    self_offer: {
      type: String,
      required: true,
    },
    redirect_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("offers", offerSchema);
