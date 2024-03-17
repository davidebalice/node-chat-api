const router = require("express").Router();

const {
  userRegister,
  userLogin,
  userLogout,
  userUpdate,
} = require("../controller/authController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/user-login", userLogin);
router.post("/user-register", userRegister);
router.post("/user-logout", authMiddleware, userLogout);
router.post("/user-update", userUpdate);

module.exports = router;
