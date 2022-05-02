import http from 'http';
import { handler } from './utils/handler.mjs';
const PORT = 3000;

http.createServer(handler).listen(PORT, () => console.log('server running at port', PORT));
