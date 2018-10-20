// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    username: String,
    numfollowers: Number,
    numtwitts: Number,
    top1twitt: String,
    top2twitt: String,
    top3twitt: String,
    top4twitt: String,
    top5twitt: String,
    top1commented: String,
    top2commented: String,
    top3commented: String,
    top4commented: String,
    top5commented: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
