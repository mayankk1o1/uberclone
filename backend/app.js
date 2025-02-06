const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv'); 
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

dotenv.config(); // Correctly calling dotenv.config() to load environment variables
connectToDb(); // Connecting to the database

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);


module.exports = app;
