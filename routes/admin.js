const path = require("path");
const dirPath = require("../utl/path");

const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product");
});

router.post("/add-product", (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect("/");
});

exports.route = router;
exports.products = products;