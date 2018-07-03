
var messages = [{
  objectId: 0,
  username: 'lino',
  text: 'hey this works',
  roomname: 'lobby'
}, {
  objectId: 1,
  username: 'ricky',
  text: 'hey this works',
  roomname: 'lobby'
}];

exports.index = function (req, res) {
  console.log('get request');
  res.json({ results: messages });
};

exports.create = function (req, res) {

  req.body.objectId = messages.length;
  messages.push(req.body);
  res.send('OK');

};

