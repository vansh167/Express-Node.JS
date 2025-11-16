const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// CREATE
app.post("/user", (req, res) => {
  users.push(req.body);
  res.send("User Added");
});

// READ
app.get("/users", (req, res) => {
  res.send(users);
});

// UPDATE
app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.send("User Updated");
});

// DELETE
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.send("User Deleted");
});

app.listen(4000, () => {
  console.log("Server running");
});
