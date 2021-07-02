import { Appliance } from '../interfaces/Appliance';

export class Stove implements Appliance {
  _isOn!: boolean;

  public turnOn(): void {
    setTimeout(function () {
      document.getElementById('target')!.innerHTML +=
        '<p>' +
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ' : THE STOVE IS ON!</p>';
    }, 4000);
    console.log('THE STOVE IS ON!'); //insert fart humor here
    this._isOn = true;
  }

  public turnOff(): void {
    setTimeout(function () {
      document.getElementById('target')!.innerHTML +=
        '<p>' +
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ' : THE STOVE IS OFF!</p><hr>';
    }, 6000);
    console.log('THE STOVE IS OFF!'); //insert fart humor here
    this._isOn = false;
  }

  public prepare(item: string) {
    if (this._isOn) {
      setTimeout(function () {
        document.getElementById('target')!.innerHTML +=
          '<p>' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes() +
          ' : Now grilling ' +
          item +
          ' !</p>';
      }, 5000);
      console.log('Now grilling ' + item + '!');
    } else {
      setTimeout(function () {
        document.getElementById('target')!.innerHTML +=
          '<p>' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes() +
          ' : there is no power!</p>';
      }, 2000);
      console.log('there is no power!'); //insert fart humor here
    }
  }
}
