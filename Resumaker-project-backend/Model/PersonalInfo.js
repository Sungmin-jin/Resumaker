const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalInformationSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  headerText: {
    type: String,
  },
  email: {
    type: String,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instargram: {
    type: String,
  },
});

module.exports = PersonalInfomation = mongoose.model(
  "personalInfomation",
  PersonalInformationSchema
);
