const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const databaseConnect = require("./database");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const chatRoute = require("./routes/chatRoute");
const { authMiddleware } = require("./middleware/authMiddleware");

dotenv.config({
  path: "config.env",
});
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
const imagesDirectory = path.join(__dirname, "uploads");
app.use("/api/uploads", express.static(imagesDirectory));
app.use("/api/chat", authRouter);
app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Backend Sever");
});

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
