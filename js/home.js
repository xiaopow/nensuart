$(document).ready(function(){

  $(document).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if (scroll >= 350) {
      $("#home-nav").removeClass('navbar-transparent');
      $("#home-nav").addClass('navbar-solid');
    };
    if (scroll <= 350) {
      $("#home-nav").addClass('navbar-transparent');
      $("#home-nav").removeClass('navbar-solid');
    };
  });

});