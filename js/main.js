$(document).ready(function(){


  $(window).scroll(function()
  {
      var nav = document.getElementsByClassName('nav');
      $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
  });
  
  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  
    $('.post-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });  


    $('.counter').counterUp({
      delay: 30,
      time: 1000
  });

});


$(window).on('load',function(){
  $("body").css("overflow","auto");
  $(".preload .d").fadeOut(1000, function(){
      $(".preload").fadeOut(2000);
  });
});