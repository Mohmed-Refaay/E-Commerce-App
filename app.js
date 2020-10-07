const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// Routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.route);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "No Page Found", path: "22" });
});

app.listen(8000);
