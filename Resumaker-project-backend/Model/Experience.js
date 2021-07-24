const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  templateId: {
    type: Schema.Types.ObjectId,
    ref: "templates",
  },
  company: {
    type: String,
  },
  position: {
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

module.exports = Experience = mongoose.model("experience", ExperienceSchema);
