// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Replace this with your actual password
const PASSWORD = "mongo123";
const DATABASE = "InterviewFeedbackDB";
// Construct the MongoDB connection URL with password
const server = `mongodb+srv://Mongo:${PASSWORD}@cluster0.grcj2x2.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

// Create a class to handle database connection
class Database {
    constructor() {
        this._connect(); // Private function to initiate the connection
    }

    // Private methods are typically denoted using an underscore _
    _connect() {
        // Establish a connection to the MongoDB server using Mongoose
        mongoose.connect(
            server,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        .then(() => {
            console.log("Connected to MongoDB"); // Connection successful
        })
        .catch((err) => {
            console.log("Error: Can't connect to the Database"); // Log any errors that occurred during connection
        });
    }
}

// Create an instance of the Database class and export it
module.exports = new Database();
