let moveInElement = document.getElementById('movein');
function firstAnimation () {
  let animationElement = document.getElementById('anim-elem');
  var t = setInterval(move, 8);
  var pos = 0;
  var startpos = -200;
  // function move () {
  //   if (pos >= 150) {
  //     clearInterval (t);
  //   } else {
  //     pos += 1;
  //     animationElement.style.left = pos + 'px';
  //   }
  // }
  function move () {
    if (startpos >= 0) {
      clearInterval (t);
    } else {
      // moveInElement.style.transform = 'translateX('+(startpos += 1)+')'+'%';
      moveInElement.style.transform = `translateX(${startpos+=1}%)`
    }
  }
};
window.onload = firstAnimation();

$('#movein').animate({
    opacity: 1,
  }, {
  duration: 4000,
  easing: "easeInOutExpo",
  complete: function () {
    // console.log(`123`);
  }
});

// $('.animation-wrapper').slideUp({
// 	duration: 1000,
// 	easing: 'easeInOut',
// 	complete: function () {
//     // console.log(`123`);
//   }
// });

$('.test-transform') .css('translateX', '-1000%') .animate ({
  translateX: '0',
  opacity: 1
}, {
  duration: 2000,
  easing: 'easeInOutExpo',
  // specialEasing: {},
  complete: function () {
    // console.log(`123`);
  }
});
