class Drink7 {
  private _name: string;
  private _flavor: string;

  public constructor(name: string, flavor: string = "") {
    this._name = name;
    this._flavor = flavor;
  }

  // getter
  get name(): string {
    return `【${this._name}】`;
  }

  // setter
  set name(name: string) {
    this._name = name;
  }

  mix(obj: Drink7): void {
    this._name += obj._name;
  }

  mixCool(obj: Drink7): void {
    this._name = "冷たい" + this._name;
    // クラス内からのメソッド読み出し
    this.mix(obj);
  }
}

const soda = new Drink7("炭酸");
const juice = new Drink7("ジュース");
// soda.mix(juice);
soda.mixCool(juice);
console.log(soda.name);
