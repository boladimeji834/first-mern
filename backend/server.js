// server.js
const express = require('express');
const mongoose = require('mongoose');
const SignupRouter = require('./api/Signup'); // Adjust the path based on your project structure
const LoginRouter = require('./api/Login'); // Adjust the path based on your project structure

const MONGODB_URI = 'mongodb+srv://boladimeji834:utwHYDEWmZLWNfYn@cluster0.oab3zvj.mongodb.net/merN';

const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
  

const router = express.Router();

app.use('/api', router);
app.use('/api', SignupRouter);
app.use('/api', LoginRouter);


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server started at port 3000');
    });
  })
  .catch(err => {
    console.log(err);
  });
