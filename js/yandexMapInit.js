ymaps.ready(init);
  var myMap;
  function init(){
    myMap = new ymaps.Map ("map", {
      center: [55.74710, 37.6105],
      zoom: 17
    });
    myMap.controls
            // Adds the zoom control button. The position of the control on the map is passed as a parameter.
            .add('zoomControl', {
                right: '35',
                top: '350'
            })
            // You cannot add two elements of the same type using a key:
            // .add('zoomControl', { // it won't be added to the map
            //     right : '60px',
            //     top : '100px'
            // })

            // Adds the list of map types
            //.add('typeSelector')
            // Adds the scale line
            // .add('scaleLine', {
            //     left: '80',
            //     bottom: '10'
            // });

    myPlacemark = new ymaps.Placemark([55.747181, 37.60964], {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.png',
      iconImageSize: [78, 63],
      iconImageOffset: [-3, -42],
      balloonContent: '<span class="ymap__title">Представительство </span><span class="ymap__gray">нашей компании</span><p>Москва, Лебяжий переулок, д.8</p><p>+7 (495) 697-06-02</p><p><a href="mailto:support@softmg.ru">support@softmg.ru</a></p>'
    }, {
      balloonShadow: false
    });


    myMap.geoObjects.add(myPlacemark);

  }

