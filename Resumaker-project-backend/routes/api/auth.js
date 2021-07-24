const express = require("express");
const User = require("../../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
require("dotenv").config();
const auth = require("../../middleware/auth");
const router = express.Router();

//Google sign-in & sign-up
//required: email, googleId
//Todo: change expires time later
router.post(
  "/google",
  [check("googleId").not().isEmpty(), check("email").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { googleId, email } = req.body;
    try {
      const existingUser = await User.findOne({ googleId });
      if (!existingUser) {
        const newUser = new User({ email, googleId });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: 7200,
        });
        return res.json(token);
      }

      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: 7200,
      });
      res.json(token);
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

//Facebook sign-in & sign-up
//require: facebookId, email
//Todo: change expires time later
router.post(
  "/facebook",
  [check("facebookId").not().isEmpty(), check("email").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { facebookId, email } = req.body;
    try {
      const existingUser = await User.findOne({ facebookId });
      if (!existingUser) {
        const newUser = new User({ email, facebookId });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: 7200,
        });
        return res.json(token);
      }

      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: 7200,
      });
      res.json(token);
    } catch (error) {
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

//Sign In Route
//email password required
//Todo: change expires time later
router.post(
  "/signin",
  [
    check("email", "Email must not be empty").not().isEmpty(),
    check("password", "password must not be empty").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({
        email,
        password: { $ne: null },
      });
      if (!existingUser) {
        return res.status(404).json({ errors: [{ msg: "Invalid Credentails" }] });
      }
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(404).json({ errors: [{ msg: "Invalid Credentails" }] });
      }
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: 7200,
      });
      res.json(token);
    } catch (error) {
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

//Sign Up Route
//Require email, password
//Todo: change expiring time
router.post(
  "/signup",
  [
    check("email", "Email must not be empty").not().isEmpty(),
    check("password", "password must not be empty").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({
        email,
        password: { $ne: null },
      });
      if (existingUser) {
        return res.status(400).json({ errors: [{ msg: "User Already Exists" }] });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User({ email, password: hashedPassword });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: 7200,
      });
      res.json(token);
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

//check if user is authenticated or not
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json({ user });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

module.exports = router;
