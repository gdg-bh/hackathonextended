$(document).ready(function() {
  $('.navbar-nav').find('a').click(function(event) {
    event.preventDefault();
    var elementClicked = $(this).attr('href');
    var dataGo = $(elementClicked);

    $('html, body').stop().animate({
      scrollTop: dataGo.offset().top - 105
    }, 500);
  });
});