head.ready(function() {
    // письмо в конце страници

    $(".mapin__letter").hide();
  $(".js__write").on("click", function(){
		$(this).parents().find('.mapin__letter').show(".mapin__letter");
  });
  $(".js__send").on("click", function(){
    $(this).parents().find('.mapin__letter_return').addClass('is_active');
	});

  $('.btn__close').on('click', function(){
     $(".mapin__letter, js__send").hide(500)
  });

$(document).ready(function() {
// header menu 480

$('.header button').on('click', function(){
  $('.header__menu').toggleClass('show480')
});

// Крутилка

    $(".proccess__click").on("click", (function(){
      $(this).siblings().removeClass('is_active');
      $(this).addClass("is_active");
      $(this).parents().find('.port').css({
        '-moz-transition' : 'all 1s',
        '-o-transition' : 'all 1s',
        '-webkit-transition' : 'all 1s;',
        'transition' : 'all 1s',
        'background-image' : 'url(img/pol11.png)'
      });
      return false;
    }));


 // выборка

    $('.process__1').click(function() {
      // $('.process__click').each(function() {
        if($(this).hasClass('rot')) {
          $(this).parents().find('.port').css({
            '-ms-transform' : 'rotate(355deg)',
            '-webkit-transform' : 'rotate(355deg)',
             'transform' : 'rotate(355deg)',
             'top' : '93px',
             'left' : '344px',
             'width' : '429px',
             'height' : '460px',
             'background-image' : 'url(img/pol11.png)'
            });
          $(this).next().addClass('rot');
      } else {
        $(this).parents().find('.port').css({
          '-ms-transform' : 'rotate(-5deg)',
          '-webkit-transform' : 'rotate(-5deg)',
           'transform' : 'rotate(-5deg)',
           'top' : '93px',
           'left' : '344px',
           'width' : '429px',
           'height' : '460px',
           'background-image' : 'url(img/pol11.png)'});
        }
      return false;
    // });
    });


    $('.process__2').click(function() {
        if($(this).hasClass('rot')) {
          $(this).parents().find('.port').css({
            '-ms-transform' : 'rotate(413deg)',
            '-webkit-transform' : 'rotate(413deg)',
             'transform' : 'rotate(413deg)',
             'top' : '81px',
             'left' : '360px',
             'width' : '429px',
             'height' : '460px',
             'background-image' : 'url(img/pol12_55.png)'
            });
          $(this).removeClass('rot');
      } else {
        $(this).parents().find('.port').css({
          '-ms-transform' : 'rotate(55deg)',
          '-webkit-transform' : 'rotate(55deg)',
           'transform' : 'rotate(55deg)',
           'top' : '81px',
           'left' : '360px',
           'width' : '429px',
           'height' : '460px',
           'background-image' : 'url(img/pol12_55.png)'});
        }
      return false;
    // });
    });


    $(".process__3").on("click", (function(){
      $(this).parents().find('.process__1').removeClass('rot');
      $(this).parents().find('.process__6').removeClass('rot');
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(110deg)",
        "-webkit-transform" : "rotate(110deg)",
         "transform" : "rotate(110deg)",
         'top' : '100px',
         'left' : '390px',
         'width' : '447px',
         'height' : '460px',
         'background-image' : 'url(img/pol13_110.png)'
      });
      return false;
    }));


    $(".process__4").on("click", (function(){
      $(this).parents().find('.process__1').removeClass('rot');
      $(this).parents().find('.process__2').removeClass('rot');
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(165deg)",
        "-webkit-transform" : "rotate(165deg)",
         "transform" : "rotate(165deg)",
         'top' : '120px',
         'left' : '375px',
         'width' : '447px',
         'height' : '460px',
         'background-image' : 'url(img/pol14_165.png)'
      });
      return false;
    }));


    $(".process__5").on("click", (function(){
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(231deg)",
        "-webkit-transform" : "rotate(231deg)",
         "transform" : "rotate(231deg)",
         'top' : '135px',
         'left' : '350px',
         'width' : '447px',
         'height' : '460px',
         'background-image' : 'url(img/pol15_220.png)'
      });
      $(this).parents().find('.process__1').addClass('rot');
      return false;
    }));



    $(".process__6").on("click", (function(){
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(289deg)",
        "-webkit-transform" : "rotate(289deg)",
         "transform" : "rotate(289deg)",
         'top' : '100px',
         'left' : '335px',
         'width' : '447px',
         'height' : '460px',
         'background-image' : 'url(img/pol16_285.png)'
      });
      $(this).parents().find('.process__1').addClass('rot');
      $(this).parents().find('.process__2').addClass('rot');
      return false;
    }));


//  AUTO KRUTILKA


    $('.pentagon').on('click', function(){
      $(this).css({'background-color' : 'transparent'})
        $(this).parent().animate( function(){
          $(this).find(".process__1").addClass('is_active')
          .parents().find('.port').css({
            "-ms-transform" : "rotate(-8deg)",
            "-webkit-transform" : "rotate(-8deg)",
             "transform" : "rotate(-8deg)",
             'top' : '85px',
             'left' : '345px',
             'background-image' : 'url(img/pol1_1.png)'
             });
          });
    });
    // });

});
// Крутилка  END


// *********  Плавное перелистывание стр ****

$(document).ready(function() {

   $(document).on('click', '#key__link', function() {
        $('html, body').animate({ scrollTop: $('#key').offset().top }, 2000 );
        return false;
    });

   $(document).on('click', '#portf', function() {
        $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 2000 );
        return false;
    });

   $(document).on('click', '#cont', function() {
        $('html, body').animate({ scrollTop: $('#mapin').offset().top }, 3000 );
        return false;
    });

   $(document).on('click', '#write', function() {
        $('html, body').animate({ scrollTop: $('#mapin__contakt').offset().top }, 3000 );
        return false;
    });

   $(document).on('click', '#write__scroll', function() {
        $('html, body').animate({ scrollTop: $('#letter').offset().top }, 1000 );
        return false;
    });

  });


  $('.carousel__preview_img').click(function() {
    $('html, body').animate({ scrollTop: $('#main').offset().top }, 800 );
        return false;
  });

  //  *** конец скрипта "Плавное перелистывание"



// ***** слайдер проворачивающий экземпляры сайтов  ****


	console.log($('body').html());
});



$(document).ready(function(){

 $('.js-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-carousel-preview',
    responsive: [
      {
        breakpoint: 480,
        settings: {
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: false,
        }
      }
    ]
  });
  $('.js-carousel-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-carousel',
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
      }
    ],
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
      }
    ]
  });

  $(".js-carousel-preview .slick-slide").on("click",function (){
    $(this).parent().find(".slick-slide").removeClass("is-active");
    $(this).addClass("is-active")
    return false;
  });

  $('.slick-slideshow').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
       },
      {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
       }
    }]
  });


  $('.slick-cycle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });


});





//  FORM VALIDATION





$(document).ready(function() {
    function validate() {
    $('.js-validate').each(function(){
      if ($(this).length > 0) {
        $(this).validate({
          errorClass: 'has-error',
          rules: {
            username: {
              minlength: 2
            },
            any: {
              minlength: 2
            },
            password: {
              minlength: 5
            },
            confirm_password: {
              minlength: 5,
              equalTo: '#password'
            },
            email: {
              email: true
            },
            tel: {
              minlength: 5,
            },
            address: {
              minlength: 2
            },
            message: {
              minlength: 4
            },
            field: {
              required: true
            },
            text_area:{
              minlength: 4
            }
            // fruit: {
            //   required: true
            // }
          },
          messages: {
            firstname: 'Вас так зовут?',
            lastname: 'У вас такая фамилия?',
            fathername: 'У вас такое отчество?',
            password: {
              required: 'Введите пароль',
              minlength: 'Минимум 5 символов'
            },
            confirm_password: {
               required: 'Пароли не совпадают',
               minlength: 'Минимум 5 символов',
               equalTo: 'Пароли не совпадают'
            },
            email: 'Неверный формат',
            address: 'Это Ваш адрес?',
            any: 'Заполните поле',
            company: 'Заполните поле',
            tel: {
              required: '* Введите Ваш терефон',
              minlength: 'Минимум 5 символов'
            },
            username: {
              required: '* Введите Ваше имя',
              minlength: 'Минимум 2 символa'
            },
            message: {
              required: 'Заполните поле',
              minlength: 'Заполните поле',
            },
            text_area: {
              required: '* Заполните поле',
              minlength: 'Заполните поле'
            }
          }
        });
      }
    });
  }

  validate();

});
//  end FORM VALIDATION




// чтобы меню при скроле вело себя как при position: relative

$(document).scroll(function(){
    var scr = 0 - $(this).scrollLeft();
    $('.header').css("left", scr);
  });


//  bilder.html запрет работаты для ссылок Регистрации и Входа
  $('#menu a').click(function(){
    return false;
  });


//servise.html

$('.sidebar button').click(function(){
  $(this).parent('.sidebar').toggleClass('expand')
});