class Human {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  // getter
  get name(): string {
    return `【${this._name}】`;
  }

  // setter
  set name(name: string) {
    this._name = name;
  }
}

const human = new Human("");
// setter利用
human.name = "田中太郎";
// getter利用
console.log(human.name);
