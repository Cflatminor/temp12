$('.queries-section p:first') .click (function (e) {
  console.log(e);
});

// $('.queries-section')

$('body') .click(function () {
  $('.header') .hide();
  $('.menu') .attr('data-isActive', 'true');
  $('.container input') .animate({
    translateX: '+=50'
  }, {
    duration: 1000,
    easing: 'easeInExpo'
  });
});
