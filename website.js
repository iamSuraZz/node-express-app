const http = require("http");
const { Console } = require("console");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is about</h1> <p>Revising NodeJs</>");
  } else {
    res.statusCode = 404;
    res.end(
      "<h1>Not found</h1> <p> The page which you are trying to access is not found. </p>"
    );
  }
});

server.listen(port, () => {
  console.log(`Server is runnign on ${port}`);
});
