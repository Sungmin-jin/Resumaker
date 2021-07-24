const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  lastUpdated: { type: Date },
  name: { type: String },
  additionalInfo: [{ type: Schema.Types.ObjectId, ref: "additionalinfos" }],
  education: [{ type: Schema.Types.ObjectId, ref: "education" }],
  experience: [{ type: Schema.Types.ObjectId, ref: "experience" }],
  personalInfo: [{ type: Schema.Types.ObjectId, ref: "personalInfomation" }],
  project: [{ type: Schema.Types.ObjectId, ref: "projects" }],
  skill: [{ type: Schema.Types.ObjectId, ref: "skills" }],
});

module.exports = Template = mongoose.model("templates", TemplateSchema);
