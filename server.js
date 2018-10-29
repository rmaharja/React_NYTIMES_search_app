const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT || 3001;



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

