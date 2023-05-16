const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortUrlSchema = new Schema({
  longUrl: { type: string, required: true },
  shortUrl: { type: string },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
