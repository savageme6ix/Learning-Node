import http from 'node:http';
const port = 8000;

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message:'Server error'}))
})

// server.listen(port,()=>{
//     console.log(`Server running on port ${port}`);
// });
