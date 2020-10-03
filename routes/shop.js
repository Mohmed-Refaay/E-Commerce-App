const path = require("path");
const express = require("express");
const dirPath = require("../utl/path");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.sendFile(path.join(dirPath, "views", "shop.html"));
});

module.exports = route;
