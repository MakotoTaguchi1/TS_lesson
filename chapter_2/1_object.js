const obj = {
  name: "缶ジュース",
  flavor: "りんご味",
};

// const obj2 = obj;
// obj2.flavor = "メロン味";
const obj2 = { ...obj };
obj2.flavor = "メロン味";

console.log(obj.flavor);
console.log(obj2.flavor);
