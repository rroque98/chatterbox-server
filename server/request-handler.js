/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var messages = [{
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
}, {
  username: 'lino',
  text: 'something',
  roomname: '4chan'
}, {
  username: 'ricky',
  text: 'special',
  roomname: 'lobby'
}].map(function(item, index) {
  item.objectId = index;
  item.createdAt = Date.now();
  return item;
});

var requestHandler = function(req, res) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // The outgoing status.
  var statusCode = 200;

  // See the note below about CORS headers.
  var defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  };
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = 'text/plain';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  res.writeHead(statusCode, headers);

  // // Make sure to always call response.end() - Node may not send
  // // anything back to the client until you do. The string you pass to
  // // response.end() will be the body of the response - i.e. what shows
  // // up in the browser.
  // //
  // // Calling .end "flushes" the response's internal buffer, forcing
  // // node to actually send all the data over to the client.
  // response.end('Hello, World! lets see some change');
  // console.log(req)
  const url = require('url');
  // url.parse(req.url).pathname;
  if (url.parse(req.url).pathname === '/classes/messages') {
    //do something on this route
    console.log('route hit');
    if (req.method === 'GET') {
      // do something with method
      headers['Content-Type'] = 'application/json';
      res.writeHead(statusCode, headers);
      res.end(JSON.stringify({results: messages}));
    } else if (req.method === 'POST') {
      statusCode = 201;
      res.writeHead(statusCode, headers);
      messages.push(/* new message data goes here */);
      res.end(JSON.stringify({results: messages}));
    }
    // console.log('WE ARE IN ROUTE'); 
  }
  
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.


exports.requestHandler = requestHandler;