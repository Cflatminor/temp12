
/**
  * @variable myh {object}
  */

class New {
  constructor(c, d) {
    this.a = 12;
    this.b = 22;
    this.c = c;
    this.d = d;
    this.arr = [];
    this.btn = document.getElementById('clickbtn');
  }

  push () {
    this.arr.push(this.a);
    this.arr.push(this.b);
    this.arr.push(this.c);
    this.arr.push(this.d);
    // console.log(this.arr.length);
  }

  sum () {
    let result = 0;
    for (let k = 0; k < this.arr.length; k++) {
      result += this.arr[k]
    }
    return result;
  };
};

let Project = new New(15, 32);
Project.push();
Project.all = Project.sum();
// console.log(Project.all);

// console.log(Project.arr);
window.aa = Project.all;

// console.log(aa);

Project.btn.addEventListener('click', function(e) {
  e.preventDefault;
  console.log(`123`);
  window.location.href = `123`;
});



/*****************************/
/** @TODO {refactor} */
// let as = {x:2};
// let myObject = {
//   a: 5,// let msive = newArray.concat ([25, 12, 22, 13, 8]);
// let mappdStr = msive.join(', ').split(', ');
// let mappdStrIf = mappdStr.map(function (v, i) {
//   return v.length > 1;
// });
//
// console.log(mappdStrIf);
//
// let falsesLength = mappdStrIf.filter(function (v, i) {
//   return v == false;
// });
// let falses = falsesLength.length;
// console.log(falses);
//   b: 10,
//
//   methd: function(c) {
//     this.x = c;
//   },
//
//   anoth: function (c) {
//     this.z = c;
//   }
// };
//
// myObject.methd.call(as,21);
// let test = myObject.methd.bind(as);
// console.log(test(2123421));
// myObject.methd(54545);
// console.log(as);
// console.log(myObject);
/*********************************/

(function () {

  let z = new Object();
  let nulobj = Object.create(null); // Коллекция свойств
  let prot = {name: 'lalala', age: '24', smoke: false};
  z.__proto__ = prot;
  z.str = 'string';
  z.num = 24;
  z.bool = false;
  z.obje = {a: 1, b: 4}
  z.calc = function (a, b) {
    return a + b;
  };

  // console.log(z);
  // console.log(z.hasOwnProperty('num'));
  function perebor (obj) {
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      console.log(obj[key]);
    }
  };
  // perebor(z);
  // console.log(z.calc(z.num, 5));
  // console.log(z.calc(z.obje.a, z.obje.b));

  // console.log(z);

})();



function User (name, age) {
  this.name = name;
  this.id = '';
  this.age = age;
  this.isActive = false;
  this.isSmoke = false;
  Object.defineProperty(this, 'defined', {
    // value: 'yes',
    // configurable: true,
    enumerable: true,
    // writable: false,
    get: function () {
      return `Name: ${this.name}, id: ${this.id}`;
    }
  });
  this.createId = function () {
    let id = [];
    for (let i = 0; i < 8; i++) {
      id.push(Math.round(Math.random() * 10));
    }
    result = id.join('');
    return this.id = result;
  };
};

User.prototype.getData = function () {
  console.log(this.name);
};

let lala = new User ('lala', 24);
lala.createId();


(function () {
  let someNewArray = arr.map(function (v, i) {
    return v.length;
  });
  let i = 0;
  while (i < 5) {
    i++;
    someNewArray.push(Math.round(Math.random() * 10));
  };
  // console.log(someNewArray);
  // console.log(sumTheArray(someNewArray));
})();


let someUser = new User ('some', 24);
someUser.createId();

console.dir(someUser);
console.log(someUser.defined);
console.dir(lala);
console.log(lala.defined);
// someUser.getData();
