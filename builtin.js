import {readFile, writeFile, appendFile, rename, createReadStream} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const rs = createReadStream('./lorem.txt','utf8');
rs.on("data", function(chunk){
    console.log(chunk)
})



