import { Server } from 'http';
import app from './app';

const port = 5000;

async function main() {
    const server: Server = app.listen(port, () => {
        console.log("The Haven Server listening on port " + port);
    })
}
main()