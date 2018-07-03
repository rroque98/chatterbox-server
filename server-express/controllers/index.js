
var ctrl = {};

ctrl.home = function (req, res) {
  res.send('hello world');
};

ctrl.messages = require('./messages');

module.exports = ctrl;