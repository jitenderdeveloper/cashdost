const sliderSchema = require("../modules/slider");

const getItems = (req, res) => {
  try {
    sliderSchema.find().then((result) => {
      res.status(200).json({
        message: "slider data",
        slider_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const postItems = (req, res) => {
  try {
    const slider_data = sliderSchema({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
    });
    slider_data.save().then((result) => {
      res.status(200).json({
        message: "slider data is post...",
        slider_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const getIdItems = (req, res) => {
  try {
    sliderSchema.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "slider data get using by id...",
        slider_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const putItems = (req, res) => {
  try {
    sliderSchema.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
          },
        }
      )
      .then((result) => {
        console.log(result)
        res.status(200).json({
          message: "slider data is updated...",
          slider_data: result,
        });
      });
  } catch (error) {
    res.send(error);
  }
};

const deleteItems = (req, res) => {
  try {
    sliderSchema.findByIdAndRemove({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "slider data is delete...",
        slider_data: result,
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
