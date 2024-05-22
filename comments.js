// create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const qs = require('querystring');
const comments = [];

// 1. create server
http.createServer((req, res) => {
    // 2. parse url
    const parseUrl = url.parse(req.url);
    const pathname = parseUrl.pathname;
    // 3. handle request
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.end('404 Not Found!');
            } else {
                res.end(data);
            }
        });
    } else if (pathname === '/comments') {
        if (req.method === 'GET') {
            res.end