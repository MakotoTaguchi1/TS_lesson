type Meet = {
  name: string;
  price?: {
    base: number;
    tax?: number;
    discount?: number;
  };
};

const obj_4: Meet = {
  name: "高級肉",
  price: {
    base: 1280,
  },
};

let value = obj_4.price?.discount?.toLocaleString();
console.log(value);

const obj_5: Meet = {
  name: "高級肉",
  price: {
    base: 1280,
    tax: 128,
    discount: 1000,
  },
};

const { base, tax = 0, discount = 0 } = obj_5.price || {};
console.log(base, tax, discount);
