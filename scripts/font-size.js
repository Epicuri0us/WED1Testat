window.addEventListener('load', function () {
    var slider = document.getElementById('font-slider');
    document.getElementById('font-size-form').addEventListener('change', function () {
        var value = slider.valueOf();
        document.body.style.fontSize = (value.value/10) + 'rem';
        document.getElementById('font-size').innerHTML = (value.value/10);
    });
});
