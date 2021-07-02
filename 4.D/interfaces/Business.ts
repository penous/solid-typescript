import { Appliance } from './Appliance';

export interface Business {
  _name: string;
  _appliance: Appliance;
  cook(item: string): void;
}
