const path = require("path");
const dirPath = require("../utl/path");

const express = require("express");

const route = express.Router();

route.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(dirPath, "views", "add-product.html"));
});

route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
