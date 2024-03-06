const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /users/register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });
  
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  const user = new User({ username, password });
  try {
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password }); // Again, in a real app, use hashed passwords
    if (user) {
        // Return true when user exists
        res.json({ userId: user._id, username, success: true, message: 'Login successful'});
    } else {
        // Return false when user doesn't exist
        res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
  });

module.exports = router;
