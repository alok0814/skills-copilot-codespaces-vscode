// Create web server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const comments = require("./comments.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Endpoint to add a new comment
app.post("/comments", (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});