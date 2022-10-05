const express = require("express");
const categoryController = require("../controllers/Category");
const router = express.Router();

router.get("/", (req, res) => {
  const data = categoryController.getAllCategory();
  res.json({
    msg: "get sucessfully",
    data: data,
  });
});
module.exports = router;
