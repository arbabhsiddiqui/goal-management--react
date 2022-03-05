const asyncHandler = require("express-async-handler");
// @desc Get Goals
// @routes GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "working",
  });
});

// @desc Get Goal
// @routes GET /api/goals/:id
// @access Private
const getGoalsById = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `single working ${req.params.id}`,
  });
});

// @desc Create Goal
// @routes POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (!res.body.text) {
    res.status(400);
    throw new Error("error in text not found");
  }

  res.status(200).json({
    message: "working",
  });
});

// @desc Update Goal
// @routes PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update working ${req.params.id}`,
  });
});

// @desc Delete Goal
// @routes DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete working ${req.params.id}`,
  });
});

module.exports = { getGoals, getGoalsById, createGoal, updateGoal, deleteGoal };
