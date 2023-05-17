const mongoose = require("mongoose");
const ShortUrl = require("../shortUrl");

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
  ShortUrl.create(
    {
      longUrl: "www.google.com.tw/",
      shortUrlCode: "12345",
    },
    {
      longUrl: "www.facebook.com/",
      shortUrlCode: "23456",
    }
  )
    .then(console.log("done"))
    .finally(() => {
      db.close();
    });
});
