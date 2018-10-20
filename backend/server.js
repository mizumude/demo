const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  "mongodb://dbusername:dbuserpassword1@ds235243.mlab.com:35243/jelotest";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

/** 
// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});


// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

*/

/** 
// put the initial data inside the DB
let data = new Data();
data.username = "Albert Einstein";
data.numfollowers = 99999999;
data.numtwitts = 100;
data.top1twitt =
  "Few are those who see with their own eyes and feel with their own hearts.";
data.top2twitt =
  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.";
data.top3twitt =
  "Unthinking respect for authority is the greatest enemy of truth.";
data.top4twitt =
  "Try not to become a man of success, but rather try to become a man of value.";
data.top5twitt =
  "I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.";
data.top1commented =
  "Great spirits have always encountered violent opposition from mediocre minds.";
data.top2commented =
  "Not everything that can be counted counts, and not everything that counts can be counted.";
data.top3commented =
  "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.";
data.top4commented =
  "Look deep into nature, and then you will understand everything better.";
data.top5commented =
  "All religions, arts and sciences are branches of the same tree.";

data.save(err => {
  if (err) return { success: false, error: err };
  return { success: true };
});
*/
