const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protect, getMe);
// router.route("/:id").get(getGoalsById).put(updateGoal).delete(deleteGoal);

module.exports = router;
