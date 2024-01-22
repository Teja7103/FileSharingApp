const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("ello");
});

module.exports = routers;
