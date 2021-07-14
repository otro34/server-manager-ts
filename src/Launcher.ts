import { Server } from './Server/Server'

class Launcher {
    //instance variable
    private server: Server;

    constructor() {
        this.server = new Server();
    }

    public launchApp(){
        console.log('app started')
        this.server.createServer();
    }
}

new Launcher().launchApp()