"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
class Restaurant {
    constructor(name, appliance) {
        this._name = name;
        this._appliance = appliance;
    }
    cook(item) {
        this._appliance.turnOn();
        this._appliance.prepare(item);
        this._appliance.turnOff();
    }
}
exports.Restaurant = Restaurant;
