const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action='/product' method='POST'>
        <input type='text' name='title'></input>
        <button type='submit'>add book</button>
    </form>`
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body.title);
  res.send(`<h1>${req.body.title}</h1>`)
  
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello there</h1>");
});

app.listen(8000);
