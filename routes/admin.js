const express = require("express");

const route = express.Router();

route.get("/add-product", (req, res, next) => {
  res.send(
    `<form action='/products' method='POST'>
        <input type='text' name='title'></input>
        <button type='submit'>add book</button>
    </form>`
  );
});

route.post("/products", (req, res, next) => {
  res.redirect("/");
});

module.exports = route;
