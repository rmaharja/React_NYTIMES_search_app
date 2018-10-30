const router = require("express").Router();
const bookRoutes = require("./article");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
