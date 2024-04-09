class Drink9 {
  // private _amount: number;
  protected _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }

  // protectedでサブクラスに公開して、getter使わなくてもアクセスできるようにする
  // get amount(): number {
  //   return this._amount;
  // }
}

class Coffee9 extends Drink9 {
  private _suger: number;
  constructor(amount: number, suger: number = 0) {
    super(amount); // Drinkクラス（スーパークラス）のコンストラクタを呼び出す
    this._suger = suger;
  }

  // amountはprotectedなので、サブクラスでもthisでアクセスできる
  showAmount(): void {
    console.log(this._amount);
  }
}

const coffee = new Coffee9(500);
// console.log(Coffee9.amount);
coffee.showAmount();
