import {DisplayHelloWorld} from './DisplayHelloWorld.js';

export class HelloWorld {

    displayHelloWorld = new DisplayHelloWorld();

    constructor() {
    }

    run() {
        this.displayHelloWorld.display();
    }
}