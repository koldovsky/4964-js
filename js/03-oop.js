const samsungS26Ultra = {
  make: "Samsung",
  model: "S26 Ultra",
  price: 80000,
  ring: function () {
    console.log("Ding-ding");
  },
};

samsungS26Ultra.color = "Black";

// console.log(samsungS26Ultra.model);
// samsungS26Ultra.ring();
console.log(samsungS26Ultra);

// Класи
class Phone {
  constructor(make, model, price, color) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.color = color;
  }
  ring() {
    console.log(`${this.make} ${this.model} Ding-ding`);
  }
}

const iPhone17ProMax = new Phone("Apple", "iPhone 17 Pro Max", 70000, "orange");
console.log(iPhone17ProMax);
iPhone17ProMax.ring();

// JSON - JavaScript Object Notation
const jsonStr = JSON.stringify(iPhone17ProMax);
console.log(jsonStr);

const objFromJson = JSON.parse(jsonStr);
console.log(objFromJson);

// Особливий тип циклу для роботи з об'єктами
for (const key in iPhone17ProMax) {
  console.log(key, iPhone17ProMax[key]);
}

// Поглиблені питання

// Проблема з var
function sampleVar() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  // console.log(i);
}
sampleVar();

// Наслідування

class WaterResistantPhone extends Phone {
  #protectionLevel;
  constructor(make, model, price, color, protectionLevel) {
    super(make, model, price, color);
    this.#protectionLevel = protectionLevel;
  }
  showProtectionLevel() {
    console.log(this.#protectionLevel);
  }
}

const samsungA57 = new WaterResistantPhone(
  "Samsung",
  "A57",
  30000,
  "white",
  "IP68",
);
console.log(samsungA57);
samsungA57.showProtectionLevel();
samsungA57.ring();
console.log(JSON.stringify(samsungA57));

// Копіювання

// const cloneObj = Object.assign({}, samsungA57);
const cloneObj = { ...samsungA57 };
console.log(cloneObj);
