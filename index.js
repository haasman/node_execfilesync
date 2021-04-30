const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const { execFile } = require("child_process");
const { execFileSync } = require("child_process").execFileSync;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // var testy = execFile("python3", ["slow.py"]);
  var testy = execFileSync("python3", ["slow.py"]);

  res.end("done");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
