/**
 * core
 */




/**
 * UI
 */
window.addEventListener('load', function() {
    document.addEventListener('click', function(evnt) {

        if(evnt.target.attributes.getNamedItem('class') != null){
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'number') {
                console.log('pressed number');
                document.getElementById('input').innerHTML += evnt.target.attributes.getNamedItem('value').nodeValue;

            }
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'operator') {
                console.log('pressed operator');
                document.getElementById('output').innerHTML = document.getElementById('input').innerHTML;
                document.getElementById('input').innerHTML = '';
            }
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'command') {
                console.log('pressed command');
            }
        }



    });

});