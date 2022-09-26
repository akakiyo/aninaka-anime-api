const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("anime");
    res.json("anime");
  } catch (err) {
    next(err);
    res.json("error");
  }
});

module.exports = router;
