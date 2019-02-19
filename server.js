const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const indexRoutes = require("./routes/index/index.js");
const searchRoutes = require("./routes/search/search.js");

// set app variable
const app = express();

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
app.use("/", indexRoutes);
app.use("/search", searchRoutes);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
