const express = require('express');
const app = express();

app.use(express.json());

// CONNECT ROUTES
const userRoutes = require('./routes/userRoutes');
app.use("/api", userRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
