const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skill: {
    type: String,
  },
  description: [String],
  image: {
    type: String,
  },
});

module.exports = Skill = mongoose.model("skills", SkillSchema);
