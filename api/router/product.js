const express = require("express");
const router = express.Router();
const productSchema = require('../modules/product')
const productController = require("../controllers/productControllers");
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


router.get("/", productController.getItems);

// router.post('/', productController.postItems)
router.post("/",upload.single("file"),(req, res) => {
  try {
    const product_data = productSchema({
      client_name: req.body.client_name,
      category: req.body.category,
      product_image: req.file.path,
      product_title: req.body.product_title,
      product_offer: req.body.product_offer,
      product_link: req.body.product_link,
      product_feature: req.body.product_feature,
      product_offer_title: req.body.product_offer_title,
    });
    product_data.save().then((result) => {
        console.log("data ->",result);
        res.status(200).json({
        message: "product is added...",
        product_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", productController.getIdItems);

router.put("/:id", productController.putItems);

router.delete("/:id", productController.deleteItems);

module.exports = router;
