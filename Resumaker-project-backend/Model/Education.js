const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  school: {
    type: String,
  },
  degree: {
    type: String,
  },
  fieldOfStudy: {
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

module.exports = Education = mongoose.model("education", EducationSchema);
