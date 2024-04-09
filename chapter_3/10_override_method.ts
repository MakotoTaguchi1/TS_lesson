class Drink10 {
  protected _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
}

class Coffee10 extends Drink10 {
  private _suger: number;
  constructor(amount: number, suger: number = 0) {
    super(amount);
    this._suger = suger;
  }

  // オーバーライド
  get amount(): number {
    return this._amount + this._suger;
  }

  showAmount(): void {
    console.log(this.amount);
  }
}

const coffee10 = new Coffee10(500, 100);
coffee10.showAmount();
