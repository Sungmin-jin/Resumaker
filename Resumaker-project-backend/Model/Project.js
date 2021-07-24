const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project: {
    type: String,
  },
  fromDate: {
    type: Date,
  },
  toDate: {
    type: Date,
  },
  isCurrent: {
    type: Boolean,
  },
  description: [String],
  image: {
    type: String,
  },
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
