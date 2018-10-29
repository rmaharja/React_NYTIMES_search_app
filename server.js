const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

