type DrinkParams = {
  name: string;
  flavor: string;
  sugar: number;
};

class Drink {
  private _name: string;
  private _flavor: string;
  private _sugar: number;
  constructor(params: DrinkParams) {
    this._name = params.name;
    this._flavor = params.flavor;
    this._sugar = params.sugar;
  }

  getSugar(): number {
    return this._sugar;
  }
}

const tea = new Drink({
  sugar: 10,
  flavor: "ダージリン",
  name: "紅茶",
});

console.log(tea);

const sugarValue = tea.getSugar();
console.log(sugarValue);
