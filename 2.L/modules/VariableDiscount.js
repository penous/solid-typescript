"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDiscount = void 0;
class VariableDiscount {
    constructor(value = 0) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a variable discount with a negative value');
        }
    }
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        return price - (price * this._value) / 100;
    }
    showCalculation(price) {
        return price + ' € -  ' + this._value + '%';
    }
}
exports.VariableDiscount = VariableDiscount;
