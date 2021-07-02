import { Appliance } from '../interfaces/Appliance';
import { Business } from '../interfaces/Business';

export class Restaurant implements Business {
  _name: string;
  _appliance: Appliance;

  constructor(name: string, appliance: Appliance) {
    this._name = name;
    this._appliance = appliance;
  }

  public cook(item: string) {
    this._appliance.turnOn();
    this._appliance.prepare(item);
    this._appliance.turnOff();
  }
}
