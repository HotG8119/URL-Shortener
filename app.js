const express = require("express");
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  //設定首頁路由
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
