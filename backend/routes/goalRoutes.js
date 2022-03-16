const express = require("express");
const {
  getGoals,
  getGoalsById,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);
router
  .route("/:id")
  .get(protect, getGoalsById)
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);

module.exports = router;
