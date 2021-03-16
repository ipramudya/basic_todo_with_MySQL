const { Router } = require("express");

const db = require("../db");

const router = Router();

router.use("/", (req, res) => {
  res.json("Cannot Get Any Data");

  console.log("Cannot Get Any Data");
});

module.exports = router;
