const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //設定首頁路由
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
