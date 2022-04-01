const http = require("http");
const { Console } = require("console");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is Suraj</h1> <p>Revising NodeJs</>");
});

server.listen(port, () => {
  console.log(`Server is runnign on ${port}`);
});
