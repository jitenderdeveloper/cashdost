const express = require("express");
const router = express.Router();
const clientSchema = require("../modules/clients");
const clientController = require("../controllers/clientControllers");

const Auth = require('../middleware/auth')

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/svg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", clientController.getItems);

// router.post('/', clientController.postItems)

router.post("/", upload.single("file"), (req, res) => {
  try {
    const client_data = clientSchema({
      client_logo: req.file.path,
      price_title: req.body.price_title,
      offer_description: req.body.offer_description,
      upto_offer: req.body.upto_offer,
      store_link: req.body.store_link,
    });
    client_data.save().then((result) => {
      res.status(200).json({
        message: "Client data is post...",
        client_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", clientController.getIdItems);

// router.put('/:id', clientController.putItems)
router.put("/:id",upload.single("file"), (req, res) => {
  try {
    clientSchema
      .findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            client_logo: req.file.path,
            price_title: req.body.price_title,
            offer_description: req.body.offer_description,
            upto_offer: req.body.upto_offer,
            store_link: req.body.store_link,
          },
        }
      )
      .then((result) => {
        res.status(200).json({
          message: "client data is updated...",
          client_data: result,
        });
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id",Auth, clientController.deleteItems);

module.exports = router;
