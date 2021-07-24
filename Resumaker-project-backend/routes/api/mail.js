const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.MAIL_API_KEY);

router.post("/", async (req, res) => {
  const { text, subject, email } = req.body;
  const message = {
    to: email,
    from: "resumakeremail@gmail.com",
    subject,
    text,
  };
  try {
    await sgMail.send(message);
    res.json({ msg: "success" });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
    if (error.response) {
      console.log(error.response.body);
    }
  }
});

module.exports = router;
