const express = require("express");
const Multer = require("../middleware/Multer");
const router = express.Router();

const main = require("../controllers/Product");

router.get("/", main.getAll);
router.post("/", main.insertProduct);
router.patch("/:id", main.updateProduct);
router.delete("/:id", main.deleteProduct);

module.exports = router;
