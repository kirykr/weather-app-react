var express = require('express');

// create our app
var app = express();

app.use(express.static('public'));
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next){
  if ( req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
});

app.listen(PORT, function () {
  console.log('Express Server is up on port ' + PORT);
});
