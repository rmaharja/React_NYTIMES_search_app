const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes");

//Assigning Port for Backend
const PORT = process.env.PORT || 3001;


//Routing
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(routes);

//Connecting to MongoDb 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reacnytimesdb",
  {
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

