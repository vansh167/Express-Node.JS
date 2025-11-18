const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// This makes your backend accept JSON data
app.use(express.json());
app.use(cors())
// Temporary array for storing users
let users = [];

// POST → Add User
// POST → Add User
app.post("/createUser", (req, res) => {
  users.unshift(req.body);                // add to front
  const { password, ...safe } = req.body; // if password exists, avoid sending it back
  res.status(201).json(safe);             // return created user as JSON
});


// GET → Show all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
