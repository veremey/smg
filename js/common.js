head.ready(function() {
    // письмо в конце страницы

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


  if ($(document).width() <= 830) {
    $('.header').addClass('scroll')
  };

  if ($(document).width() <= 830) {
    $('.header').addClass('small__header'),
    $('.header__menu').addClass('small__header__menu')
    };

  $('.header button, .small__header__menu li').on('click', function(){
    $('.header__menu').toggleClass('dblock')
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

// ***** слайдер проворачивающий экземпляры сайтов  ****
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
      breakpoint: 478,
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


//  bilder.html запрет работаты для ссылок Регистрации и Входа

  $('#menu a').click(function(){
    return false;
  });


//servise.html

$('.sidebar button').click(function(){
  $(this).parent('.sidebar').toggleClass('expand')
});


// scroll up like a twitter

(function($) {
  'use strict';

  var _destroyFn;

  $.scrollupbar = function($bar, options) {
    // Default options
    options = $.extend({
      enterViewport: $.noop,
      fullyEnterViewport: $.noop,
      exitViewport: $.noop,
      partiallyExitViewport: $.noop
    }, options);

    function isFullyInViewport() {
      return $window.scrollTop() <= $bar.offset().top;
    }

    function isInViewport() {
      return $window.scrollTop() < $bar.offset().top + $bar.outerHeight();
    }

    var $window = $(window),
        $document = $(document),
        minY = $bar.css('position') == 'fixed' ? 0 : $bar.offset().top,
        lastY = $window.scrollTop(), // Use last Y to detect scroll direction.
        initialPosTop = $bar.position().top,
        iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
        timeout;

    $.scrollupbar.isInViewport = isInViewport();
    $.scrollupbar.isFullyInViewport = isFullyInViewport();

    // iOS can't handle momentum scroll properly (See discussion on
    // http://stackoverflow.com/questions/2863547).
    if (!iOS) {
      $window.on('scroll.scrollupbar', function() {
        var y = $window.scrollTop(),
            barHeight = $bar.outerHeight();

        // Ignore elastic scrolling.
        if (y < 0 || y > ($document.height() - $window.height())) {
          return;
        }

        // Cancel the event fired by the previous scroll.
        if (timeout) {
          clearTimeout(timeout);
        }

        if (y < lastY) { // Scrolling up
          // If the bar is hidden, place it right above the top frame.
          if (!$.scrollupbar.isInViewport && lastY - barHeight >= minY) {
            $bar.css('top', lastY - barHeight);
            $.scrollupbar.isInViewport = true;
            options.enterViewport();
          }

          // Scrolls up bigger than the bar's height fixes the bar on top.
          if (isFullyInViewport()) {
            if (y >= minY) {
              $bar.css({
                'position': 'fixed',
                'top': 0
              });
            } else {
              $bar.css({
                'position': 'absolute',
                'top': initialPosTop
              });
            }

            if (!$.scrollupbar.isFullyInViewport) {
              $.scrollupbar.isFullyInViewport = true;
              options.fullyEnterViewport();
            }
          }

          // Fire an event to reveal the entire bar after 400ms if the scroll
          // wasn't big enough.
          timeout = setTimeout(function() {
            if (!isFullyInViewport()) {
              $bar.css({
                'position': 'fixed',
                'top': $bar.offset().top - y
              });

              $bar.animate({'top': 0}, 100, function() {
                $.scrollupbar.isFullyInViewport = true;
                options.fullyEnterViewport();
              });
            }
          }, 400);
        } else if (y > lastY) { // Scrolling down
          // Unfix the bar allowing it to scroll with the page.
          if ($.scrollupbar.isFullyInViewport) {
            $bar.css({
              'position': 'absolute',
              'top': lastY > minY ? lastY : initialPosTop
            });

            if (!isFullyInViewport()) {
              $.scrollupbar.isFullyInViewport = false;
              options.partiallyExitViewport();
            }
          }

          if ($.scrollupbar.isInViewport && !isInViewport()) {
            $.scrollupbar.isInViewport = false;
            options.exitViewport();
          }

          // Fire an event to hide the entire bar after 400ms if the scroll
          // wasn't big enough.
          timeout = setTimeout(function() {
            if (isInViewport() && y - barHeight >= minY) {
              $bar.animate({'top': y - barHeight}, 100, function() {
                $.scrollupbar.isInViewport = false;
                options.exitViewport();
              });
            }
          }, 400);
        }

        lastY = y;
      });
    } else { // Fallback simplified behaviour for iOS.
      $window.on('touchstart.scrollupbar', function () {
        lastY = $window.scrollTop();
      });

      $window.on('touchend.scrollupbar', function () {
        var y = $window.scrollTop();

        if (y < lastY || y - $bar.outerHeight() < minY) { // Scrolling up
          if (y <= minY) {
            // Restore original position.
            $bar.css({
              'position': 'absolute',
              'top': initialPosTop
            });

            $bar.show(function() {
              $.scrollupbar.isInViewport = true;
              $.scrollupbar.isFullyInViewport = true;
              options.enterViewport();
              options.fullyEnterViewport();
            });
          } else {
            $bar.css({
              'position': 'fixed',
              'top': 0
            });

            $.scrollupbar.isInViewport = true;
            options.enterViewport();

            $bar.slideDown(function() {
              $.scrollupbar.isFullyInViewport = true;
              options.fullyEnterViewport();
            });
          }
        } else if (y > lastY) { // Scrolling down
          $.scrollupbar.isFullyInViewport = false;
          options.partiallyExitViewport();

          $bar.slideUp(function() {
            $.scrollupbar.isInViewport = false;
            options.exitViewport();
          });
        }

        lastY = y;
      });
    }

    _destroyFn = function() {
      // Unbind all listeners added by scrollupbar plugin
      $window.off('.scrollupbar');

      // Restore original bar position.
      $bar.css({
        'position': 'absolute',
        'top': initialPosTop
      });
    };

    return $bar;
  };

  $.scrollupbar.destroy = function() {
    if (_destroyFn) {
      return _destroyFn();
    }
  };

  $.fn.scrollupbar = function(options) {
    return $.scrollupbar(this, options);
  };
})(jQuery);

if ($(document).width() <= 830) {
  $.scrollupbar($('.header'))
};