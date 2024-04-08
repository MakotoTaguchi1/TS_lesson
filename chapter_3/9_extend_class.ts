class Drink9 {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }

  get amount(): number {
    return this._amount;
  }
}

class Coffee9 extends Drink9 {
  private _suger: number;
  constructor(amount: number, suger: number = 0) {
    super(amount); // Drinkクラス（スーパークラス）のコンストラクタを呼び出す
    this._suger = suger;
  }
}

const coffee = new Coffee9(500);
console.log(coffee.amount);
