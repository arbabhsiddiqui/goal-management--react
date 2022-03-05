const express = require("express");
const {
  getGoals,
  getGoalsById,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(createGoal);
router.route("/:id").get(getGoalsById).put(updateGoal).delete(deleteGoal);

module.exports = router;
