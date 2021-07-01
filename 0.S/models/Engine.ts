import { Fuel } from './Fuel'

export class Engine{
    private _status: boolean = false;
    private readonly FUEL_MILEAGE: number = 10;
    private _fuel: Fuel

    constructor(fuel: Fuel) {
       this._fuel = fuel
    }

    get status(): boolean {
        return this._status;
    }

    get fuelMileage(){
        return this.FUEL_MILEAGE
    }

    get fuel(){
        return this._fuel
    }

    turnEngineOn() {
        this._status = true;
    }

    turnEngineOff() {
        this._status = false;
    }

}