const express = require("express"); // imports the Express.js framework and assigns it to the variable express. It allows us to create a web server and handle HTTP requests and responses.
const mongoose = require("mongoose"); // imports the Mongoose library, which provides an interface to MongoDB, and assigns it to the variable mongoose. It allows  to interact with the MongoDB database using JavaScript.
const authRouter = require("./authRouter");
const PORT = process.env.port || 3000; // defines the port number for the server to listen on

const app = express(); // creates an instance of the Express application by calling the express function and assigns it to the variable app. This app object represents our web server and allows us to configure routes, middleware, and handle requests.

app.use(express.json()); // This line adds the express.json middleware to the Express application. It enables parsing of JSON data in the request body, allowing us to access the request payload as a JavaScript object.
app.use("/auth", authRouter); // listening to authRouter

const start = async () => {
  // starting the server and connecting to the MongoDB database
  try {
    await mongoose.connect(
      `mongodb+srv://qwerty:qwerty123@cluster0.ude5lgy.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on ${PORT}`)); // This line starts the Express server and makes it listen on the specified port
  } catch (e) {
    console.log(e);
  }
};

start(); // initiating the server startup process.
