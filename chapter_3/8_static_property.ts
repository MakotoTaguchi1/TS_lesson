// 静的プロパティ
class Drink8 {
  public static TAX_RATE: number = 0.1;
  private _price: number;

  constructor(price: number = 100) {
    this._price = price;
  }

  getPrice(): number {
    // クラス内からのアクセス：プロパティの前にthisではなくクラス名をつける
    return Math.floor(this._price * (1 + Drink8.TAX_RATE));
  }
}

// クラスからは参照可能
console.log(Drink8.TAX_RATE);

const milk = new Drink8();
// インスタンスからは参照不可
// console.log(milk.TAX_RATE);

const price = milk.getPrice();
console.log(price);
