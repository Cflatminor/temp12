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
function arraySplit () {
  let myArr = '11, 4, 52, 12, 24';
  let arrSplit = myArr.split(', ');
  let result = 0;
  for (let i = 0; i < arrSplit.length; i++) {
    result += +arrSplit[i];
  }
  // console.log(arrSplit);
  // console.log(result);
  return result;
};
arraySplit();
////////////////////////////
function arrayJoin () {
  let myArr = [53, 12, 53, 22];
  let strArr = myArr.join(', ');
  // console.log(strArr);
};
arrayJoin();
////////////////////////////
function arrTest1 () {
  let myArr = [];
  // Заполнить массив случайными числами от 1 до 25, объеденить в строку;
  for (let i = 0; i < 7; i++) {
    myArr.push(Math.round(25*Math.random()));
  }
  let myArrStr = myArr.join(', ');
  // console.log(myArrStr);
};
arrTest1();
////////////////////////////
let c = 224;

//////////////////////////////////
// Разобрать область видимости //
////////////////////////////////

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
  myh.addEventListener('click', function (event) {
    myh.style.color = `red`;
  });
};
createSomeElement();

//////////////////////////////////////////
//////// Методы массивов ////////////////
////////////////////////////////////////

let newArray = [];

function arrSplit () {
  this.names = 'name0, name1, name2, name3, name4, name5';
  this.arr = names.split(', ');
  for (let i = 0; i < arr.lenght; i++) {
    console.log(arr[i]);
  }
  // console.log(arr);
};
arrSplit(); /** @variables names, arr */

function arrJoin () {
  this.strArr = arr.join('; ')
  // console.log(this.strArr);
};
arrJoin();

function arrDelete () {
  delete this.arr[3];
  // console.log(arr);
};
arrDelete();

function arrSplice () {
  // console.log(new Array(4).join('hi '));
  let someObj = {
    number: 4,
    string: '3f2355',
    bool: true
  };
  arr.splice (1, 1, 'name1'); // (delete-start-index, delete-count, add-elems)
  arr.splice (3, 1, 'name3');
  let removedElements = arr.splice (0, 1, someObj);
  // arr.splice (-1, 0, '123'); // (отрицательный index отсчитает с конца)
  console.log(this.arr);
  // console.log(this.arr[0].b);
  // console.log(removedElements);
};
arrSplice(); /** @variable obj [0] */

function arrSlice () {
  let slicedElements = arr.slice(1, 4); // (begin, end(not included))
  let fullCopy = arr.slice();
  // console.log(slicedElements); // На исходный массив не влияет
  // fullCopy.push('123');
  // console.log(fullCopy);
};
arrSlice();

function fillArray (name, amount) {
  name.length = amount;
  for (let i = 0; i < name.length; i++) {
    name[i] = Math.round(50 * Math.random());
  };
};
fillArray (newArray, 5);
