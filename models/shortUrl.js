const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortUrlSchema = new Schema({
  longUrl: { type: String, required: true },
  shortUrlCode: { type: String },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
