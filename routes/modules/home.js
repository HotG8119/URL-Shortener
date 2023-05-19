const express = require("express");
const router = express.Router();
const port = 3000;
const domain = `http://localhost:${port}`;
const ShortUrl = require("../../models/shortUrl");

router.get("/", (req, res) => {
  res.render("index", { domain });
});

router.post("/", (req, res) => {
  const longUrl = req.body.longUrl;

  return ShortUrl.findOne({ longUrl })
    .lean()
    .then(urlInfo => {
      // 如果資料庫已有該筆資料，就直接回傳
      // 如果資料庫沒有該筆資料，就產生shortUrlCode，並存入資料庫

      if (urlInfo) {
        const shortUrlCode = urlInfo.shortUrlCode;
        res.render("index", { domain, longUrl, shortUrlCode });
      } else {
        const shortUrlCode = Math.random().toString(36).slice(-5);
        return ShortUrl.create({ longUrl, shortUrlCode })
          .then(() => {
            res.render("index", { domain, longUrl, shortUrlCode });
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

router.get("/:shortUrlCode", (req, res) => {
  const shortUrlCode = req.params.shortUrlCode;
  return ShortUrl.findOne({ shortUrlCode })
    .lean()
    .then(urlInfo => {
      res.redirect(`${urlInfo.longUrl}`);
    })
    .catch(error => {
      console.log(error);
      res.render("error", { error: error.message });
    });
});

module.exports = router;
