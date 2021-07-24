const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdditionalInfoSchema = new Schema({
  about: {
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

module.exports = AdditionalInfo = mongoose.model(
  "additionalinfos",
  AdditionalInfoSchema
);
