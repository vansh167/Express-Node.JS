// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// --- Connect to MongoDB ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

// --- Models will be required below ---
const User = require('./models/User'); // we'll create this next

// POST /createUser -> save to DB
app.post('/createUser', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email and password required' });
    }

    // check duplicate email
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: 'Email already exists' });

    const newUser = new User({ name, email, password }); // password stored raw for now (see notes)
    const saved = await newUser.save();

    // send back saved user but WITHOUT password
    const { password: _p, ...userSafe } = saved.toObject();
    res.status(201).json(userSafe);
  } catch (err) {
    console.error('POST /createUser error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /users -> read from DB and return (no password)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error('GET /users error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
