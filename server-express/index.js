var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

app.use(function(req, res, next) {
  
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('access-control-allow-headers', 'content-type, accept');
  res.set('access-control-max-age', 10 );

  next();
});

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, function() {
  console.log('Server now listening on port 3000');
});
