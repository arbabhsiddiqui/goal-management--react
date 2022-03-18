import axios from "axios";

const API_URL = "/api/goals";

// get goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(`${API_URL}`, config);
  return res.data;
};

// goal create
const create = async (goal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(`${API_URL}`, goal, config);
  return res.data;
};

// goal Update
const update = async (goal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put(`${API_URL}`, goal, config);
  return res.data;
};

// delete goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(`${API_URL}/${goalId}`, config);
  return res.data;
};

const authService = {
  create,
  update,
  getGoals,
  deleteGoal,
};

export default authService;
