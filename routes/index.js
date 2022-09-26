const express = require("express");
const router = express.Router();

router.use("/", require("./test"));
router.use("/anime", require("./anime"));

module.exports = router;
