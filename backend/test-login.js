const http = require('http');

const data = JSON.stringify({
  email: 'updeshsingh9063@gmail.com',
  password: 'Senu@9063'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/admin/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  console.log('statusCode:', res.statusCode);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error('Network Error:', error);
});

req.write(data);
req.end();
