// クラスへのジェネリクスの応用
class Animal12 {
  walk(): void {
    console.log("お散歩");
  }
}

class Dog12 extends Animal12 {}
class Cat12 extends Animal12 {}

// Tに指定できる型を、Animalを継承した型に限定する。
function walkAnimal<T extends Animal12>(animal: T): void {
  animal.walk();
}

const dog12 = new Dog12();
const cat12 = new Cat12();

// dog, catはAnimalを継承しているので引数に入れられる。
walkAnimal(dog12);
walkAnimal(cat12);

// インターフェースへのジェネリクスの応用
interface ISound {
  makeSound(): void;
}
class Dog122 implements ISound {
  makeSound(): void {
    console.log("ワン");
  }
}
class Cat122 implements ISound {
  makeSound(): void {
    console.log("ニャー");
  }
}

// ISoundインターフェースを実装しているクラスであれば受け入れる
function makeSound<T extends ISound>(obj: T): void {
  obj.makeSound();
}

const dog122 = new Dog122();
const cat122 = new Cat122();
makeSound(dog122);
makeSound(cat122);
