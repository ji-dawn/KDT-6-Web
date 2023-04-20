// 클래스
// 객체를 만들기 위해 사용

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드
  meow() {
    console.log("야옹");
  }
  eat() {
    console.log("먹는다");
  }
}

let navi = new Cat("나비", 1);
navi.meow();
navi.eat();

// 클래스가 없던 시절
let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};
let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};
let tv3 = {
  name: "ccc tv",
  size: "55inch",
};
// 매번 객체를 생성해야 했기에 오류를 발생할 위험이 높았다.

//클래스 등장 = 일종의 작업지시서
class TV {
  name = "";
  price = 0;
  size = "";
  constructor(name, price, size) {
    //this: 여기 클래스 안에 있는 속성
    //this.name : 이 클래스 안에 있는 name!
    this.name = name;
    this.price = price;
    this.size = size;
  }
  getPrice() {
    return this.price + "만원";
  }
  setPrice(price) {
    this.price = price;
  }
}
const newTv1 = new TV("aaa tv", 2000, "56inch");
console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());

// 상속
class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

class Laptop extends Product {
  weight = "";

  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
}

let laptop = new Laptop("삼성tv", 400, "55");
console.log(laptop.price);
console.log(laptop.getPrice());
let paret = new Product("tv", 1000);
console.log(parent.weight); // undefined. 부모는 자식의 프로퍼티를 사용할 수 없다.
