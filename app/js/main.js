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

////////////////////////////
// console.clear();
////////////////////////////

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
function bugaga (a, b) {
  this.a = a;
  this.b = b;
  this.c = 12;
  this.summ = function () {
    return a + b + c; // this.a + this.b + this.c
  }
}

let ttt = new bugaga(10, 20);
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
  // myh.style.transition = `transform ease-in-out .3s`;
  myh.addEventListener('click', function (event) {
    myh.style.color = `red`;
  });
  this.myh = myh;
};
createSomeElement();

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
    console.log(e);
    paragr[i].style.color = 'blue';
  });
});

// parallax
window.addEventListener('mousemove', function (e) {
  myh.style.transform = `translate(${e.clientX/600}%, ${e.clientY/20}%)`;
  // myh.style.transition = `ease-in-out .7s`;
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
