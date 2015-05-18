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

// Крутилка



    $(".proccess__click").on("click", (function(){
      $(this).siblings().removeClass('is_active');
      $(this).addClass("is_active");
      $(this).parents().find('.port').css({
        '-moz-transition' : 'all 1s',
        '-o-transition' : 'all 1s',
        '-webkit-transition' : 'all 1s;',
        'transition' : 'all 1s',
        'background-image' : 'url(img/pol1_1.png)'
      });
      return false;
    }));




 // выборка

    $('.process__1').click(function() {
      // $('.process__click').each(function() {
        if($(this).hasClass('rot')) {
          $(this).parents().find('.port').css({
            '-ms-transform' : 'rotate(350deg)',
            '-webkit-transform' : 'rotate(350deg)',
             'transform' : 'rotate(350deg)',
             'top' : '85px',
             'left' : '345px',
             'background-image' : 'url(img/pol1_1.png)'
            });
          $(this).next().addClass('rot');
      } else {
        $(this).parents().find('.port').css({
          '-ms-transform' : 'rotate(-8deg)',
          '-webkit-transform' : 'rotate(-8deg)',
           'transform' : 'rotate(-8deg)',
           'top' : '85px',
           'left' : '345px',
           'background-image' : 'url(img/pol1_1.png)'});
        }
      return false;
    // });
    });







    // $(".process__1").on("click", (function(){
    //   $(this).parents().find('.port').css({
    //     "-ms-transform" : "rotate(-8deg)",
    //     "-webkit-transform" : "rotate(-8deg)",
    //      "transform" : "rotate(-8deg)",
    //      'top' : '85px',
    //      'left' : '345px',
    //      'background-image' : 'url(img/pol1_1.png)'
    //   });
    //   return false;
    // }));



    $('.process__2').click(function() {
      // $('.process__click').each(function() {
        if($(this).hasClass('rot')) {
          $(this).parents().find('.port').css({
            '-ms-transform' : 'rotate(408deg)',
            '-webkit-transform' : 'rotate(408deg)',
             'transform' : 'rotate(408deg)',
             'top' : '85px',
             'left' : '345px',
             'background-image' : 'url(img/pol1_2.png)'
            });
          $(this).removeClass('rot');
          // $(this).parents().find('.process__3').addClass('rot');
      } else {
        $(this).parents().find('.port').css({
          '-ms-transform' : 'rotate(55deg)',
          '-webkit-transform' : 'rotate(55deg)',
           'transform' : 'rotate(55deg)',
           'top' : '85px',
           'left' : '345px',
           'background-image' : 'url(img/pol1_1.png)'});
        }
      return false;
    // });
    });




    // $(".process__2").on("click", (function(){
    //   $(this).parents().find('.process__1').removeClass('rot');
    //   $(this).parents().find('.port').css({
    //     "-ms-transform" : "rotate(55deg)",
    //     "-webkit-transform" : "rotate(55deg)",
    //      "transform" : "rotate(55deg)",
    //      'top' : '81px',
    //      'left' : '360px',
    //      'background-image' : 'url(img/pol1_2.png)'
    //   });
    //   return false;
    // }));




    $(".process__3").on("click", (function(){
      $(this).parents().find('.process__1').removeClass('rot');
      $(this).parents().find('.process__6').removeClass('rot');
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(110deg)",
        "-webkit-transform" : "rotate(110deg)",
         "transform" : "rotate(110deg)",
         'top' : '111px',
         'left' : '390px',
         'background-image' : 'url(img/pol1_3.png)'
      });
      return false;
    }));


    $(".process__4").on("click", (function(){
      $(this).parents().find('.process__1').removeClass('rot');
      $(this).parents().find('.process__2').removeClass('rot');
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(173deg)",
        "-webkit-transform" : "rotate(173deg)",
         "transform" : "rotate(173deg)",
         'top' : '131px',
         'left' : '375px',
         'background-image' : 'url(img/pol1_4.png)'
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
         'background-image' : 'url(img/pol1_5.png)'
      });
      $(this).parents().find('.process__1').addClass('rot');
      return false;
    }));



    $(".process__6").on("click", (function(){
      $(this).parents().find('.port').css({
        "-ms-transform" : "rotate(289deg)",
        "-webkit-transform" : "rotate(289deg)",
         "transform" : "rotate(289deg)",
         'top' : '111px',
         'left' : '335px',
         'background-image' : 'url(img/pol1_6.png)'
      });
      $(this).parents().find('.process__1').addClass('rot');
      $(this).parents().find('.process__2').addClass('rot');
      return false;
    }));


//  AUTO KRUTILKA


    $('.pentagon').on('click', function(){
      $(this).css({'background-color' : '#fff'})
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

   $(document).on('click', '#key__link', function () {
        $('html, body').animate({ scrollTop: $('#key').offset().top }, 2000 );
        return false;
    });

   $(document).on('click', '#portf', function () {
        $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 2000 );
        return false;
    });

   $(document).on('click', '#cont', function () {
        $('html, body').animate({ scrollTop: $('#mapin').offset().top }, 3000 );
        return false;
    });

   $(document).on('click', '#write', function () {
        $('html, body').animate({ scrollTop: $('#mapin__contakt').offset().top }, 3000 );
        return false;
    });


  });


  //  *** конец скрипта "Плавное перелистывание"

  //  #####  Карта start ######



var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.746993, 37.608284], // Москва
        zoom: 17
    });

    // document.getElementById('destroyButton').onclick = function () {
    //     // Для уничтожения используется метод destroy.
    //     myMap.destroy();
    // };

  }

  // смотри js/yandexMapInit.js


  //  #####  Карта AND ######





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
        breakpoint: 758,
        settings: {
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
    slidesToScroll: 4,
    asNavFor: '.js-carousel',
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
        slidesToShow: 6,
        slidesToScroll: 6
        }
      }
    ]
  });

  $(".js-carousel-preview .slick-slide").on("click",function (){
    $(this).parent().find(".slick-slide").removeClass("is-active");
    $(this).addClass("is-active")
    return false;
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


