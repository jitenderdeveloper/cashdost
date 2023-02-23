const express = require("express");
const router = express.Router();
const offerSchema = require("../modules/offersSchema");
const offerControllers = require("../controllers/offerControllers");
const Authorization = require("../middleware/auth");

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

router.get("/", offerControllers.getItems);

// router.post("/", upload.single('file'), offerControllers.postItems);
router.post("/",upload.single('file'), (req, res) => {
    // console.log(req.file, req.body)
  try {
    const offer_data = offerSchema({
      Company_offer: req.body.Company_offer,
      Company_paragraph: req.body.Company_paragraph,
      Company_logo: req.file.path,
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
});

router.get("/:id", offerControllers.getIdItems);

router.put("/:id", offerControllers.putItems);

router.delete("/:id", offerControllers.deleteItems);

module.exports = router;
