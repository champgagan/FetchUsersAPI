const { default: axios } = require("axios");
const express = require("express");
let router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { status, data } = await axios.get(process.env.USER_END_POINT);
    console.log(`response status is ${status}`);
    res.setHeader("content-type", "application/json");
    res.status(status).send({ success: true, data });
  } catch (err) {
    res
      .status(500)
      .send(err && err.message ? err.message : "Something went wrong!");
  }
});

module.exports = router;
