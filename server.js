import http from 'node:http';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/types') {
    const list = ['fire', 'earth', 'air', 'water', 'eather'];
    res.end(JSON.stringify(list));
  }
  if (url === '/greet') {
    res.end('Hellooooo');
  } else {
    res.end(`URL: ${url}, Method: ${method}`);
  }
});

server.listen(4000);
