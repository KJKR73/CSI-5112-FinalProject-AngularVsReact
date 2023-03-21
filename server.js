// Define the library components
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

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