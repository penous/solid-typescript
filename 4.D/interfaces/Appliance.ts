export interface Appliance {
  _isOn: boolean;
  turnOn(): void;
  turnOff(): void;
  prepare(item: string): void;
}
