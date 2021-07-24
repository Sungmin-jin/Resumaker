const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.set({
    AWS_Bucket_Name: process.env.AWS_BUCKET_NAME,
    AWS_Bucket_Region: process.env.AWS_BUCKET_REGION,
    AWS_Access_Key: process.env.AWS_ACCESS_KEY,
    AWS_Secret_Key: process.env.AWS_SECRET_KEY,
    X_API_Google: process.env.GOOGLE_CLIENT_ID,
    X_API_Facebook: process.env.FACEBOOK_APP_ID,
  });
  res.json({});
});

module.exports = router;
