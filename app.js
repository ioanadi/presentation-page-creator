// const http = require('http');
// fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// // fs.readFile('./public/index.html', function (err, html) {
// //     console.log(html)
// //     if (err) {
// //         throw err; 
// //     }  
// //     const server = http.createServer((req, res) => {
// //     res.writeHeader(200, {"Content-Type": "text/html"});  
// //     res.write(html);  
// //     res.end();
// //     });
// //     server.listen(port, hostname, () => {
// //         console.log(`Server running at http://${hostname}:${port}/`);
// //     });
// // })

const express = require('express')
const app = express()

app.use(express.static('dist'))

/* ... */

app.listen(3000, () => console.log('Server ready'))

