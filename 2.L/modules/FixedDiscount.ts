import { Discount } from './Discount';

export class FixedDiscount implements Discount {
  readonly _value: number;

  constructor(value: number = 0) {
    this._value = value;

    if (value <= 0) {
      throw new Error(
        'You cannot create a fixed discount with a negative value'
      );
    }
  }

  apply(price: number): number {
    //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
    return Math.max(0, price - this._value);
  }

  showCalculation(price: number): string {
    return price + '€ -  ' + this._value + '€ (min 0 €)';
  }
}
