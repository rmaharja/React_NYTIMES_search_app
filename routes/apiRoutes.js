const axios = require("axios");
const router = require("express").Router();

router.get("/api/articles", (req, res) => {
  axios
    .get(req.queryUrl)
    .then((data) => res.json(data));
})

module.exports = router;