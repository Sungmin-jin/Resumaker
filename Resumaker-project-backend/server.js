const express = require("express");
const app = express();
const cors = require("cors");
const connectdb = require("./config/config");

//cors option
const corsOptions = {
  origin: ["http://localhost:8080", "https://www.resumaker.io"],
  optionsSuccessStatus: 200,
  exposedHeaders: [
    "X-Custom-Header",
    "X_API_Google",
    "X_API_Facebook",
    "AWS_Bucket_Name",
    "AWS_Bucket_Region",
    "AWS_Access_Key",
    "AWS_Secret_Key",
  ],
};

//routes
const authRoute = require("./routes/api/auth");
const templateRoute = require("./routes/api/template");
const keyRoute = require("./routes/api/key");
const mockDataRoute = require("./routes/api/mockData");
const mailRoute = require("./routes/api/mail");
const testRoute = require("./routes/api/test");

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

connectdb();

app.use("/api/auth", authRoute);
app.use("/api/template", templateRoute);
app.use("/api/key", keyRoute);
app.use("/api/mockData", mockDataRoute);
app.use("/api/mail", mailRoute);
app.use("/api/test", testRoute);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
