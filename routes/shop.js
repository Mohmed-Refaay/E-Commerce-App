const path = require("path");
const express = require("express");
const dirPath = require("../utl/path");

const adminData = require("./admin")

const route = express.Router();

route.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {prods: products })
});

module.exports = route;
