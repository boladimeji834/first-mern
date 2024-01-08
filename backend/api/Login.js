const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User.model');

const router = express.Router();



router.post('/login', async (req, res) => {
    try {
        const { name, email, password } = req.body;
    
        const user = await User.findOne({ email });
    
        if (user && await bcrypt.compare(password, user.password)) {
          res.status(200).json({ message: 'Login successful', user: user });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
})

module.exports = router;