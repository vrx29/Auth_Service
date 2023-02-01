const express = require("express");
const v1ApiROutes = require("./v1/index");

const router = express.Router();

router.use("/v1", v1ApiROutes);

module.exports = router;
