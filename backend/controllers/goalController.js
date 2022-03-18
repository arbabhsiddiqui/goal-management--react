const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");
const User = require("../model/userModel");

// @desc Get Goals
// @routes GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

// @desc Get Goal
// @routes GET /api/goals/:id
// @access Private
const getGoalsById = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  res.status(200).json(goal);
});

// @desc Create Goal
// @routes POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("error in text not found");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc Update Goal
// @routes PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  // validate user

  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorize");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goal
// @routes DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  // validate user
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorize");
  }

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  await goal.remove();

  res.status(200).json({
    message: `delete successfully`,
    id: req.params.id,
  });
});

module.exports = { getGoals, getGoalsById, createGoal, updateGoal, deleteGoal };
