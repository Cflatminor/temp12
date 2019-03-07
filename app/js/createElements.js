/**
  * @variable myh {object}
  * @variable myText {string}
  * @variable paragr {object}
  *
  */

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

////////////////////////////////////////////////////////

function innerPtext () {
  let p = document.getElementById('tezt');
  p.setAttribute(`text`, `true`);
  if (p.hasAttribute('text')) {
    p.innerHTML = 'lalala';
  };
};
innerPtext();

////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////

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
