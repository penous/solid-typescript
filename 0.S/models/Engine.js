"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor(fuel) {
        this._status = false;
        this.FUEL_MILEAGE = 10;
        this._fuel = fuel;
    }
    get status() {
        return this._status;
    }
    get fuelMileage() {
        return this.FUEL_MILEAGE;
    }
    get fuel() {
        return this._fuel;
    }
    turnEngineOn() {
        this._status = true;
    }
    turnEngineOff() {
        this._status = false;
    }
}
exports.Engine = Engine;
