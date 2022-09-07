$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-header');
    $('nav div').addClass('visible-title');
  } else {
    $('header').removeClass('fixed-header');
    $('nav div').removeClass('visible-title');
  }
});
