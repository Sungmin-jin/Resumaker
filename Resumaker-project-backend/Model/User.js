const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    required: false,
    type: String,
  },
  googleId: {
    type: String,
    required: false,
  },
  facebookId: {
    type: String,
    required: false,
  },
  templates: [{ type: Schema.Types.ObjectId, ref: "templates" }],
});

module.exports = User = mongoose.model("users", UserSchema);
