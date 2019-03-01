
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
//   a: 5,
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
