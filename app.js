import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const logEvents = async (message) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    
    // 1. Added \n at the end so each log entry starts on a new line
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`; 
    console.log(logItem.trim()); // Trim console log to keep terminal clean

    try {
        const logsDir = path.join(__dirname, 'logs');
        
        // 2. FIXED: Use a try/catch block with mkdir instead of existsSync
        try {
            await fs.mkdir(logsDir);
        } catch (dirError) {
            // Ignore error if the directory already exists, throw otherwise
            if (dirError.code !== 'EEXIST') throw dirError;
        }

        // 3. Append the log item to your file asynchronously
        await fs.appendFile(path.join(logsDir, 'eventlog.txt'), logItem);
    } catch (error) {
        console.error('Failed to write log:', error);
    }
};

