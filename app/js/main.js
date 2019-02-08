const mainHeader = document.getElementById('header');
let name = 'vvvv';

function createUser (username) {
  console.log (name);
  console.log (username);
  return name = username;
};

mainHeader.innerHTML = '<p>hhh!</p> <p>message</p> <p>UserName is : ' + name + '</p>';

let cat = {
  name: 'Alice',
  age: 4,
  sayMeow: function () {
    return console.log ('meow meow');
  },
  eat: function () {
    return console.log ('nyam nyam');
  }
}

cat.sayMeow();
cat.eat();
createUser('aaaa');

console.log (name)
