import { logEvents } from './app.js';
import { EventEmitter } from 'node:events';
import http from 'node:http'
// const emitter = new EventEmitter();
// emitter.on('log',(msg)=>{
//     logEvents(msg)
// })

// emitter.emit('log',('logged'))
const PORT = 3500;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Home</h1>')
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About</h1>')
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>404 not found</h1>')
    }
})

server.listen(PORT, ()=>{
    console.log("server running")
})