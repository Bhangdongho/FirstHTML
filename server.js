let http = require("http");

function start(route, handle) {
  function onRequest(request, response) {
    let myURL = new URL("http://localhost:8888" + request.url);
    let pathname = myURL.pathname;
    route(pathname, handle);

    response.writeHead(200, { "content-Type": "text/html" });
    response.write("Hello Node.js");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  // localhost:8888
}

exports.start = start;
