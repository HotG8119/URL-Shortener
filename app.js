// Include express from node_modules and define server related variables
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const routes = require("./routes");

const port = 3000;
const domain = `http://localhost:${port}`;

require("./config/mongoose");

const app = express();
// setting template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// setting static files
app.use(express.static("public"), express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`app is running on ${domain}`);
});
