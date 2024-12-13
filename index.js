const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRouter = require("./routes/bookRoutes");

dotenv.config({ path: "./.env" });

const app = express();
// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected successfully...");
  })
  .catch((err) => {
    console.error("Failed to connect to the database❗❗", err);
  });
//routes
app.use("/api/books", bookRouter);
// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
