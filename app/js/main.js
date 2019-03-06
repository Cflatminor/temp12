/**
  * @variable myh {object}
  * @variable ttt {object}
  * @variable myText {string}
  * @variable paragr {object}
  *
  */


function innerPtext () {
  let p = document.getElementById('tezt');
  p.setAttribute(`text`, `true`);
  if (p.hasAttribute('text')) {
    p.innerHTML = 'lalala';
  };
};
innerPtext();

////////////////////////////
function inputPlacehold () {
  // let inpBoRa = +prompt('What is input border radius? (1 - 25 px)', '');
  let inpBoRa = 8;

  let div = document.createElement('div');
  document.body.appendChild(div);
  div.classList.add ('container');
  div.style.marginTop = 10 + 'px';

  let inp = document.createElement('input');
  div.appendChild(inp);
  inp.setAttribute('type', 'text');
  inp.setAttribute('placeholder', 'type message here');
  inp.style.background = 'lightgray';
  inp.style.border = '1px solid gray';
  inp.style.borderRadius = inpBoRa + 'px';
  inp.style.padding = 5 + 'px';

  let spn = document.createElement('span');
  div.appendChild(spn);
  spn.style.marginLeft = 15 + 'px';

  inp.addEventListener('keydown', function (e) {
    if (inp.value.length > 0 && e.keyCode == 13) {
      spn.innerHTML = inp.value;
    };
  });
};
inputPlacehold();
////////////////////////////

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

function createSomeElement () {
  let myblock = document.createElement('div');
  document.body.appendChild(myblock);
  myblock.classList.add ('footer-tipa');
  let myh = document.createElement('h1');
  myh.classList.add ('tipa-zagolovok');
  myblock.appendChild(myh);
  myh.innerHTML = `He11o wor1d`;
  myh.style.fontSize = 24 + `px`;
  myh.style.margin = 30 + `px`;
  myh.style.color = `#212121`;
  myh.style.textAlign = `center`;
  myh.style.width = 50 + '%';
  myh.style.margin = '0 auto';
  // myh.style.transition = `transform ease-in-out .3s`;
  myh.addEventListener('click', function (event) {
    myh.style.color = `red`;
  });
  this.myh = myh;
};
createSomeElement();

// parallax
window.addEventListener('mousemove', function (e) {
  myh.style.transform = `translate(${e.clientX/600}%, ${e.clientY/20}%)`;
  // myh.style.transition = `ease-in-out .7s`;
});

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

let paragr = document.querySelectorAll('.reversedTextHere');
let myText = 'Family';
paragr.forEach (function (v, i) {
  let myReversedText = myText.split('').reverse().join(' - ');
  paragr[i].innerHTML = `${myReversedText}`;
  paragr[i].addEventListener ('click', function (e) {
    e.preventDefault ();
    paragr[i].innerHTML = myText.split(' - ').reverse().join('').split('').join(' - ');
    // console.log(e);
    paragr[i].style.color = 'blue';
  });
});

// /**
//   * @variables array {array}
//   * @variables string {string}
//   * @variables joinedArray {string}
//   * @variables slicedArray {array}
//   */
//
// let A = {
//
//   // Variables
//   string: `one, two, three, four, five, six, seven`,
//   array: [],
//   joinedArray: undefined,
//   slicedArray: [],
//
//   // Methods
//   split: function (ar, symbol, length) {
//     ar = this.string.split(symbol, length);
//     this.array = ar
//     return this.array;
//   },
//
//   join: function (symbol) {
//     this.joinedArray = this.array.join(symbol)
//     return this.joinedArray;
//   },
//
//   splice: function (ar, i, d, elems) {
//     ar.splice(i, d, elems);
//     this.array = ar;
//     if (!elems) {
//       ar.shift();
//     }
//     return this.array;
//   },
//
//   slice: function (ar, start, end) {
//     this.slicedArray = ar.slice(start, end);
//     return this.slicedArray;
//   }
// };
//
// window.onload = A.split(A.array, ', ', 6);
// window.onload = A.join(' - ');
// window.onload = A.slice(A.array, 1, 4);
// A.array.push(1, 5, 23, 51, 12, 22);
// A.array.sort();
// let cnctd = A.array.concat();
// cnctd.push(123, 123, 125);
// console.log(cnctd);
//
// let onlyNums = cnctd.filter(function (num) {
//   return typeof(num) === 'number';
// });
//
// onlyNums.sort((a, b) => a - b);
// console.log(onlyNums);
//
// console.log(cnctd);
//
// let maparr = cnctd.map(function (numbers) {
//   return typeof(numbers) === 'number';
// });
//
// let joinedmaparr = maparr.join(', ');
//
// let newj = joinedmaparr.split(', ').reverse().concat();
// console.log(newj);
// console.log(joinedmaparr);
//
