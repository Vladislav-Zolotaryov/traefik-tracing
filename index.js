const http = require('node:http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((_, res) => {
  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Deadnode!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 