const mongoose = require("mongoose");

const todaydeals = new mongoose.Schema(
  {
    image: {
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
    offer: {
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

module.exports = mongoose.model("todaydeal", todaydeals);
