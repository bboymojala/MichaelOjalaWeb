var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'https://www.linkedin.com/in/michael-ojala-8058b4/'});
  res.end();
}).listen(8888);