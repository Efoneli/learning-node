const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1> another Welcome to the first server in the world</h1>')
});
server.listen(4000, () => {
    console.log('Server running on port 4000');
})