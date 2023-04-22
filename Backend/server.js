// Define the library components
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const userRouter = require('./routes/user')

// Add the router to the main server
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