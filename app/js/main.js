const mainHeader = document.getElementById('header');
let name = 'vvvv',
    age = 22;

function createUser (username) {
  return name = username;
};

// mainHeader.innerHTML = '<p>hhh!</p> <p>message</p> <p>UserName is : ' + name + '</p>';

let cat = {
  name: 'Alice',
  age: 4,
  sayMeow: function () {
    return console.log ('meow meow');
  },
  eat: function () {
    return console.log ('nyam nyam');
  }
};

// cat.sayMeow();
// cat.eat();

createUser('Zombie');
// console.log (name)

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

let player = {
  name: name,
  age: age,
};

let cards = {
  d2: 2,
  d3: 3,
  d4: 4,
  d5: 5,
  d6: 6,
  d7: 7,
  d8: 8,
  d9: 9,
  d10: 10,
  dJ: 11,
  dQ: 12,
  dK: 13,
  dA: 14,
  s2: 2,
  s3: 3,
  s4: 4,
  s5: 5,
  s6: 6,
  s7: 7,
  s8: 8,
  s9: 9,
  s10: 10,
  sJ: 11,
  sQ: 12,
  sK: 13,
  sA: 14,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
  h7: 7,
  h8: 8,
  h9: 9,
  h10: 10,
  hJ: 11,
  hQ: 12,
  hK: 13,
  hA: 14,
  c2: 2,
  c3: 3,
  c4: 4,
  c5: 5,
  c6: 6,
  c7: 7,
  c8: 8,
  c9: 9,
  c10: 10,
  cJ: 11,
  cQ: 12,
  cK: 13,
  cA: 14
}

let score = 0;
let sss = 0;
// console.log (player.name, player.age);

function scoreCalc () {
  let result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

console.log (scoreCalc(2, 8, 12));

var randprop = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

// console.log (randprop(cards));

// console.log (sss);
let currentScore = function () {
  return score += sss;
}

// console.log (currentScore);

console.log (window.location.href);
