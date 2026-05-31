import http from 'node:http';

export function startHealthServer() {
  const port = process.env.PORT;

  if (!port) {
    return;
  }

  const server = http.createServer((request, response) => {
    if (request.url === '/health') {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Adopt Me Discord bot is running.');
  });

  server.listen(Number(port), '0.0.0.0', () => {
    console.log(`Health server listening on port ${port}`);
  });
}
