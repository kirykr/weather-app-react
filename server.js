var express = require('express');

// create our app
var app = express();

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Express Server is up on port 8080.');
});
