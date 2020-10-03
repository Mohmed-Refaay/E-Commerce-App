const express = require("express");
const bodyParser = require("body-parser");

// Routes
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(8000);
