const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT || 3001;

//Connecting to MongoDb 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reacnytimesdb",
  {
    useMongoClient: true
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

