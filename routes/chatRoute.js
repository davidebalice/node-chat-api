const router = require("express").Router();

const {
  getFriends,
  messageUploadDB,
  messageGet,
  ImageMessageSend,
  messageSeen,
  getPhoto,
  getUserPhoto,
  delivaredMessage,
} = require("../controller/chatController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/get-friends", authMiddleware, getFriends);
router.post("/send-message", authMiddleware, messageUploadDB);
router.get("/get-message/:id", authMiddleware, messageGet);
router.post("/image-message-send", authMiddleware, ImageMessageSend);
router.post("/seen-message", authMiddleware, messageSeen);
router.post("/delivared-message", authMiddleware, delivaredMessage);
router.get("/images/:filename", authMiddleware, getUserPhoto);
router.get("/photo/:filename", authMiddleware, getPhoto);

module.exports = router;
