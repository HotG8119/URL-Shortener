// Include express from node_modules and define server related variables
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongodb connected!");
});
// setting template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// setting static files
app.use(express.static("public"), express.urlencoded({ extended: true }));

const ShortUrl = require("./models/shortUrl");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const longUrl = req.body.longUrl.replace("http://", "");

  return ShortUrl.findOne({ longUrl })
    .lean()
    .then(urlInfo => {
      if (urlInfo) {
        const shortUrlCode = urlInfo.shortUrlCode;
        res.render("index", { shortUrlCode });
      } else {
        const shortUrlCode = Math.random().toString(36).slice(-5);
        return ShortUrl.create({ longUrl, shortUrlCode })
          .then(() => {
            res.render("index", { shortUrlCode });
          })
          .catch(error => {
            console.log(error);
            res.render("error", { error: error.message });
          });
      }
    })
    .catch(error => {
      console.log(error);
      res.render("error", { error: error.message });
    });
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
