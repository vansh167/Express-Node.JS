let users = [];

exports.createUser = (req, res) => {
  users.push(req.body);
  res.send("User Added");
};

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.send("User Updated");
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.send("User Deleted");
};
