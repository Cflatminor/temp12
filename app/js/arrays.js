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
// arraySplit();
////////////////////////////
function arrayJoin () {
  let myArr = [53, 12, 53, 22];
  let strArr = myArr.join(', ');
  // console.log(strArr);
};
// arrayJoin();
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
// arrTest1();


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











//////////////////////////////////////////
//////// Методы массивов ////////////////
////////////////////////////////////////

  /**
    * @globals -------------------
    * @variable names {string}
    * @variable arr {array}
    * @variable newArray {array}
    * @variable reversedArr {array}
    * @variable someArrObj {object}
    * @method fillArray
    * @method sumTheArray
    * -----------------------------
    */

let newArray = [];
let someArrObj = {
  number: 4,
  string: '3f2355',
  bool: true,
  object: {
    a: 12,
    b: 25,
    c: true
  }
};

// (function () {
//   // console.log(arr);
//   let my1 = 'arr[0]'.split('').reverse().join('');
//   // console.log(my1);
// })();

function fillArray (name, amount) {
  name.length = amount;
  for (let i = 0; i < name.length; i++) {
    name[i] = Math.round(50 * Math.random());
  };
};
fillArray(newArray, 5);

// const test = [2,4,11,1,4,9,6];
// console.log (test.sort((a,b)=>b-a)); // сортировка чисел

//////////////////
//// Методы /////
////////////////

// push/pop, shift/unshift, splice – для добавления и удаления элементов.
// join/split – для преобразования строки в массив и обратно.
// slice – копирует участок массива.
// sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
// reverse – меняет порядок элементов на обратный.
// concat – объединяет массивы.
// indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).
// Object.keys(obj) возвращает массив свойств объекта.

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
  arr.splice (1, 1, 'name1'); // (delete-start-index, delete-count, add-elems)
  arr.splice (3, 1, 'name3');
  let removedElements = arr.splice (0, 1, someArrObj);
  // arr.splice (-1, 0, '123'); // (отрицательный index отсчитает с конца)
  // console.log(this.arr);
  // console.log(this.arr[0].string);
  // console.log(removedElements);
};
arrSplice();

function arrSlice () {
  let slicedElements = arr.slice(1, 4); // (begin, end(not included))
  let fullCopy = arr.slice();
  // console.log(slicedElements); // На исходный массив не влияет
  // fullCopy.push('123');
  // console.log(fullCopy);
};
arrSlice();

function arrSort () {
  arr.shift();
  arr.splice(1, 0, 'name6');
  arr.sort();
  // console.log(arr);
};
arrSort();

function arrReverse () {
  this.reversedArr = arr.slice().reverse();
  // console.log(arr);
  // arr.reverse();
};
arrReverse(); /** @variable reversedArr */

function arrConcat () {
  // Создаёт новый массив
  let newArr = arr.concat('name7'); // В скобках доплнительные элементы, или массив
  // console.log(newArr);
};
arrConcat();

function arrIndexOf () {
  // console.log(arr.indexOf('name4'));
  // console.log(arr.indexOf('name55')); // -1 Если элемента нет.
};
arrIndexOf(); // Не поддерживается IE8- (es5-shim)

function arrCheckForValue () {
  console.log(arr);
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    var key = arr[i];
    store[key] = true;
  };
  if (store.name5) { // Имеется ли значение в массиве, работает со строками
    console.log('yes');
  } else {
    console.log('no');
  };
};
// arrCheckForValue(); // Проверка на наличие элемента в массиве

function arrObjectKeys () {
  let objKeysToArray = Object.keys(someArrObj);
  // console.log(objKeysToArray);
};
arrObjectKeys();

//////////////////
//// Перебор ////
////////////////

// function arrForEach () {};

function arrFilter () {
  // console.log(newArray);
  let newArrayMoreThenTen = newArray.filter (function (v, i) {
    return v > 10;
  });
  // console.log(newArrayMoreThenTen);
};
arrFilter();

function arrMap () {
  let newArr = arr.slice();
  newArr.push('3243423');
  // console.log(newArr);
  let arrgsLengths = newArr.map(function (v, i, a) {
    return v.length;
  });
  // console.log(arrgsLengths);
};
arrMap();

function sumTheArray (ar) {
  let result = ar.reduce(function (sum, current, i, array) {
    return sum + current;
  });
  return result;
};



// console.log(newArray);
// let msive = newArray.concat ([25, 12, 22, 13, 8]);
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
