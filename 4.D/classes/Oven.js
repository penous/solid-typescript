"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oven = void 0;
class Oven {
    turnOn() {
        setTimeout(function () {
            document.getElementById('target').innerHTML +=
                '<p>' +
                    new Date().getHours() +
                    ':' +
                    new Date().getMinutes() +
                    ' : THE GAS IS ON!</p>';
        }, 1000);
        console.log('THE GAS IS ON!'); //insert fart humor here
        this._isOn = true;
    }
    turnOff() {
        setTimeout(function () {
            document.getElementById('target').innerHTML +=
                '<p>' +
                    new Date().getHours() +
                    ':' +
                    new Date().getMinutes() +
                    ' : THE GAS IS OFF!</p><hr>';
        }, 3000);
        console.log('THE GAS IS OFF!'); //insert fart humor here
        this._isOn = false;
    }
    prepare(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML +=
                    '<p>' +
                        new Date().getHours() +
                        ':' +
                        new Date().getMinutes() +
                        ' : Now baking ' +
                        item +
                        ' !</p>';
            }, 2000);
            console.log('Now baking ' + item + '!');
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML +=
                    '<p>' +
                        new Date().getHours() +
                        ':' +
                        new Date().getMinutes() +
                        ' : there is no gas!</p>';
            }, 2000);
            console.log('there is no gas!'); //insert fart humor here
        }
    }
}
exports.Oven = Oven;
