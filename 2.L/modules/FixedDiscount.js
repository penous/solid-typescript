"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDiscount = void 0;
class FixedDiscount {
    constructor(value = 0) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a fixed discount with a negative value');
        }
    }
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        return Math.max(0, price - this._value);
    }
    showCalculation(price) {
        return price + '€ -  ' + this._value + '€ (min 0 €)';
    }
}
exports.FixedDiscount = FixedDiscount;
