const express = require("express");
const sequelize = require("../sequelize");
const router = express.Router();
const annict = require("../annict");

const workNumInOnePage = 25;

router.get("/this-season-anime", async (req, res, next) => {
  try {
    const { pageNum } = req.query;
    annict.Work.get({ filter_season: "2022-autumn", page: pageNum })
      .then((response) => response.json())
      .then((response) => {
        const total_count = response.total_count;
        let totalPageNum = total_count / workNumInOnePage;
        totalPageNum = Math.ceil(totalPageNum);
        const works = response.works;
        res.json({ works, totalPageNum }).status(200);
      });
  } catch (err) {
    next(err);
    res.json("error");
  }
});
module.exports = router;
