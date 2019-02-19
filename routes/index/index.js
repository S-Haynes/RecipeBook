const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

module.exports = router;