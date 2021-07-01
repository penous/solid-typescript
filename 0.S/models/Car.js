"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(engine, musicPlayer) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
    }
    get miles() {
        return this._miles;
    }
    get engine() {
        return this._engine;
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    drive() {
        if (this._engine.status === false || this._engine.fuel.fuelLevel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._engine.fuel.useFuel = 1;
        this._miles += this._engine.fuelMileage;
    }
}
exports.Car = Car;
