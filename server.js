import http from 'node:http';
const port = 8000;

const server = http.createServer((req,res)=>{
    res.end('hello world')
})

server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
