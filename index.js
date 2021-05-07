const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const { 
  spawnSync, 
  execSync, 
  execFileSync,
} = require('child_process');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  var testy = execFileSync("python3", ["slow.py"]);
  // var testy = execSync("python3", ["slow.py"]);

  // const stdout = execSync("python3 slow.py");

  res.end(testy);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
