const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
// setup local variables
const port = process.env.PORT || 5000;

// connect db
connectDB();

// setup express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
