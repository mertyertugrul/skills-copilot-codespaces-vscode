// Create web server
// 1. Create a web server
// 2. Read the comments.json file
// 3. Send the comments.json file to the client

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 2. Read the comments.json file
    const filePath = path.join(__dirname, 'comments.json');
    const file = fs.readFileSync(filePath);

    // 3. Send the comments.json file to the client
    res.end(file);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});