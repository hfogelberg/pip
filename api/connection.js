var mongoose = require("mongoose"),
  bluebird = require("bluebird");

const isLocal = process.env.NODE_ENV == "development";
const dbUri = isLocal
  ? "mongodb://localhost:27017/pip"
  : "mongodb://golzzard:TCOfiv4FMSK4@ds129386.mlab.com:29386/pip";
console.log("Db connection to open: " + dbUri);
mongoose.connect(dbUri);

mongoose.export = { mongoose };
