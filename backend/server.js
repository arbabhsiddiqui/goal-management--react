const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
// setup local variables
const port = process.env.PORT || 5000;

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
