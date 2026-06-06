import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const logEvents = async(message)=>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `Item logged, Time${dateTime}\t ${uuidv4()}\t ${message}\n`

    try{
        const logsDir = path.join(__dirname,'logs');
        const filepath = path.join(logsDir, 'log.txt')
        await fs.mkdir(logsDir, {recursive:true})
        await fs.appendFile(filepath,logItem,'utf8')
    }catch(error){
        console.error(error)
    }
    
}