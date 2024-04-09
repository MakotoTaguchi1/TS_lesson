interface IWarkable {
  walk(): void;
}

// classへのinterfaceの実装
class Cat1 implements IWarkable {
  walk(): void {
    // interfaceはpublicなのでprivate, protectedにはできない
    console.log("猫歩き");
  }
}

// interfaceの継承
interface IRunnable extends IWarkable {
  run(): void;
}

class Cat2 implements IRunnable {
  walk(): void {
    console.log("猫歩き");
  }

  run(): void {
    console.log("猫ダッシュ");
  }
}
