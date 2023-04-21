// Define the library components
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const userRouter = require('./routes/user')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', userRouter);

// Define the constants
const PORT = 9999;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// Define the connection string
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// Connect to mongoose
mongoose.connect(CONNECTION_STRING, connectionParams).then(() => {
    console.log("Connection to MongoDB successful");
})
.catch((error) => {
    console.log(error)
    console.log("Error connecting to database");
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})