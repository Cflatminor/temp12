/**
  * @variable ttt {object}
  *
  */

//////////////////////////////////
// Разобрать область видимости //
////////////////////////////////
let c = 224;
function bugogo (a, b) {
  this.a = a;
  this.b = b;
  this.c = 12;
  this.summ = function () {
    return a + b + c; // this.a + this.b + this.c
  }
}

let ttt = new bugogo(10, 20);
ttt.a = 342;
// console.log(ttt.summ());

//////////////////////////////////
//////////////////////////////////

// console.log(require('util').inspect(, { depth: null }));
