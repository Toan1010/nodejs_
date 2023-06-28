const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Starting");
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello yolk World</h1>');
    res.end();
});

server.listen(3000, 'localhost', ()=> {
    console.log('running');
});