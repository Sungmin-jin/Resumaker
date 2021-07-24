const express = require("express");
const router = express.Router();
const { templateList, dashboardInfo } = require("../../mockData");

router.post("/", (req, res) => {
  try {
    const { firstIndex, secondIndex } = req.body;
    console.log(firstIndex, secondIndex, templateList.length);

    if (secondIndex == templateList.length) {
      res.header("X-Custom-Header", "lastIndex");
    } else {
      res.header("X-Custom-Header", "keepGoing");
    }
    const templateArray = templateList.slice(firstIndex, secondIndex);
    res.json(templateArray);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});
router.post("/dashboard", (req, res) => {
  try {
    const { firstIndex, secondIndex } = req.body;
    if (secondIndex == dashboardInfo.length) {
      res.header("X-Custom-Header", "lastIndex");
    } else {
      res.header("X-Custom-Header", "keepGoing");
    }
    const temp = dashboardInfo.slice(firstIndex, secondIndex);
    console.log(temp);
    res.json(temp);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
