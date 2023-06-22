const app = require('express')();
const mongoose = require('mongoose');
const connectDB = require('./db/connect.js');
require('dotenv').config();

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()