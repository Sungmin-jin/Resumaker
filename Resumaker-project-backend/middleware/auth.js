const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({
        msg: "Unauthorized User",
      });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: "invalid token" });
      }
      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    console.log("middleware error");
    res.status(500).json({ msg: "server error" });
  }
};
