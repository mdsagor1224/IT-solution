$(document).ready(function(){



  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();


  // mobile
  //mobile-wrap
  const mobile_nav_open = $('.mobile-nav-icon');
  const mobile_sidebar = $('.mobile-sidebar');
  const mobile_nav_close = $('.menu-close');

  mobile_nav_open.on('click', function(){
    mobile_sidebar.addClass('mobile-menu-active');
  });

  mobile_nav_close.on('click', function(){
    mobile_sidebar.removeClass('mobile-menu-active');
  });



  //mobile-menus
  $('.mobile-nav a').each(function(){
    var href = $(this).attr('href');
    if(href = '#'){
      $(this).addClass('hash-nav')
    }else {
      $(this).removeClass('hash-nav')
    }
  });


  //mobile-menus-markup
  $.fn.menumarker = function(options){
    mobile_menu = $(this),
    settings = $.extend({
      format: "dropdown",
      sticky: false
    }, options);


  return this.each(function(){
    mobile_menu.find('li ul').parent().addClass('has-sub');
    var multiTg = function(){
      mobile_menu.find('.hash-nav').parent().addClass('hash-has-sub');
      mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
      mobile_menu.find('.submenu-button').on('click', function(){
        $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open-sub')) {
              $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
              $(this).siblings('ul').hide('fadeIn');
          } else {
              $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
              $(this).siblings('ul').slideToggle().show('fadeIn');
          }
      });
    };

    if (settings.format === 'multitoggle') multiTg();
    else mobile_menu.addClass('dropdown');
    if (settings.sticky === true) mobile_menu.css('position', 'fixed');
    var resizeFix = function () {
        if ($(window).width() > 991) {
            mobile_menu.find('ul').show('fadeIn');
            mobile_menu.find('ul.sub-menu').hide('fadeIn');
        }
    };
    resizeFix();
    return $(window).on('resize', resizeFix);

  })

 }


  $('.mobile-nav').menumarker({
    format: "multitoggle"
  });


    // stiky menu
    $(window).on('scroll',function(){
        var scroll = $ (window).scrollTop();
        if(scroll < 1){
          $(".stiky").removeClass("scroll-header");
        }else{
          $(".stiky").addClass("scroll-header");
        }
      });




      // home 1 counter up
      $('.techniq__aboutus-counterup').on('mouseenter', function () { 
        $(this).addClass('active').parent().siblings().find('.techniq__aboutus-counterup').removeClass('active');
      });




  // testimmonial home 1
      
  $('.testimonial__active').slick({
    centerMode: false,
    slidesToShow: 3,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



// home 2 testimonial 
  $('.testimonial2__active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll:1,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
      


  // Home 1 counter up

  // counter
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  // home 3 testimonial  

  $('.testimonial3__active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll:1,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
      





      //  service hover home3

      $('.single__service__box3').on('mouseenter', function () { 
        $(this).addClass('active').parent().siblings().find('.single__service__box3').removeClass('active');
      });

      // project hover home3
      
      $('.single__project__item3').on('mouseenter', function () { 
        $(this).addClass('active').parent().siblings().find('.single__project__item3').removeClass('active');
      });

      // service inner page
       $('.service__inner__item').on('mouseenter', function () { 
        $(this).addClass('active').parent().siblings().find('.service__inner__item').removeClass('active');
      });




      // scroll top home 1

      $(window).scroll(function(){
        if($(this).scrollTop() > 40 ){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0},300);
    });


    // scroll top home 2

      $(window).scroll(function(){
          if($(this).scrollTop() > 40 ){
              $('#topBtn2').fadeIn();
          }else{
              $('#topBtn2').fadeOut();
          }
      });
  
      $("#topBtn2").click(function(){
          $('html, body').animate({scrollTop : 0},300);
      });


    // scroll top home 3

    $(window).scroll(function(){
      if($(this).scrollTop() > 40 ){
          $('#topBtn3').fadeIn();
      }else{
          $('#topBtn3').fadeOut();
      }
  });

  $("#topBtn3").click(function(){
      $('html, body').animate({scrollTop : 0},300);
  });

  
  // preloder
  $(window).load(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
  });
  



// animation 

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  


  offset: 120, 
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});


      
});
