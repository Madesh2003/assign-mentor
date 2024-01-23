const express = require('express');
const bodyParser = require('body-parser');
const { ConnectToDatabase } = require('./Database/dbconfig');  //Import the Database from database folder
const APP_SERVER = express();                                  //I have created server which name is app
const PORT = 8000;                                             //Defined the PORT

// Here I configured the data base
ConnectToDatabase();

// Configure the server to accept JSON
APP_SERVER.use(bodyParser.json());

//Registering all the controllers

APP_SERVER.use('/api/mentor',require('./controllers/mentor.controllers'));
APP_SERVER.use('/api/student',require('./controllers/student.controllers'));



//Checking the server is working with all methods

APP_SERVER.all("/", (req, res) => {
    return res.status(200).json({
      message: "Request Successful",
    });
  });


//Listening to port with express server

APP_SERVER.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
