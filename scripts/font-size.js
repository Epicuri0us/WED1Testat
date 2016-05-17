'use strict';

window.addEventListener('load', function () {
    var slider = document.getElementById('font-slider');
    document.getElementById('font-size-form').addEventListener('change', function () {
        var value = (slider.valueOf().value) / 10;
        document.body.style.fontSize = value + 'rem';
        document.getElementById('font-size').innerHTML = value;
    });
});
