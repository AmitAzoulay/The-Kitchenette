const mongoose = require('mongoose');
const express = require('express')
var cors = require('cors')
const session = require('express-session');
require('dotenv').config();

const server = express()

server.set("view engine", "ejs");
server.use(cors());            
server.use(express.json());  

server.use('/', require('./routes/UserRoute'))


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Database connection error:', err));


server.listen(process.env.port, () => {
    console.log(`server listening on port ${process.env.port}`)
})