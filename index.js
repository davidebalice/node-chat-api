const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseConnect = require("./database");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const chatRoute = require("./routes/chatRoute");

dotenv.config({
  path: "config.env",
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/chat", authRouter);
app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("This is from backend Sever");
});

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
