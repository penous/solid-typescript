"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
class Fuel {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get fuelLevel() {
        return this._fuel;
    }
    set useFuel(usage) {
        this._fuel -= usage;
    }
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}
exports.Fuel = Fuel;
