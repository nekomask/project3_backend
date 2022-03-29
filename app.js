require('dotenv').config()
const { urlencoded } = require('express');
const express = require('express');

const mongoose = require("mongoose");
const morgan = require('morgan')
const app = express();
const itemController = require("./controllers/itemController")

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/karolin_mongoose_store'

//Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('MongoDB connection established:', mongoURI)
)
// Error / Disconnection
const db = mongoose.connection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(morgan('short'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/items', itemController);

app.listen(3001, () => {
    console.log('app is running')
})
