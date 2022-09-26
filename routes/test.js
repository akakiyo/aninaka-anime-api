const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("test");
    res.json("test");
  } catch (err) {
    next(err);
    res.json("error");
  }
});

module.exports = router;
