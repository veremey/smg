



function getDegreeElementById(port){
    var element = document.getElementById('port');
    var style = window.getComputedStyle(element, null);
    // получаем значение стилей
    var valueStyle = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform");
    // если стилей нет, то угол 0 градусов
    if(valueStyle == 'none') return 0;
    // разбираем полученное значение
    console.log(valueStyle);
    var values = valueStyle.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    // получаем синус и косинус
    var cos = values[0];
    var sin = values[1];
    // вычисляем угол
    var degree = Math.round(Math.asin(sin) * (180/Math.PI));
    if(cos<0){
        addDegree = 90 - Math.round(Math.asin(sin) * (180/Math.PI));
        degree = 90 + addDegree;
    };
    if(degree < 0){
        degree = 360 + degree;
    };
    return degree;
};

