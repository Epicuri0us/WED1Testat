/**
 * core
 */
function calculate(a,b,operation){
    switch(operation) {
        case "+": return sum(a,b);
            break;
        case "-": return difference(a,b);
            break;
        case "∗": return product(a,b);
            break;
        case "÷": return quotient(a,b);
            break;
        default:
            break;
    }
}

function sum(a,b){
    return a+b;
}

function difference(a,b){
    return a-b;
}

function product(a,b){
    return a*b;
}

function quotient(a,b){
    return a/b;
}

/**
 * UI
 */
window.addEventListener('load', function() {
    document.getElementById('output').innerHTML = "Welcome";
    var number1 = '';
    var number2 = '';
    var operator = '';
    document.addEventListener('click', function(evnt) {
        if(evnt.target.attributes.getNamedItem('class') != null){
            checkWelcome();
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'number') {
                console.log('pressed number');
                number1 += evnt.target.attributes.getNamedItem('value').nodeValue;
            }
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'operator') {
                console.log('pressed operator');
                var id = evnt.target.attributes.getNamedItem('id').nodeValue;
                operator = document.getElementById(id).innerHTML;
                if(number2 == ''){
                    number2 = number1;
                    number1 = '';
                }else{

                }

            }
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'command') {
                console.log('pressed command');
                var id = evnt.target.attributes.getNamedItem('id').nodeValue;
                var command = document.getElementById(id).innerHTML;

                if(command == "C"){
                    number1 = '';
                    number2 = '';
                    operator = '';
                }else {
                    var a, b, str, operation;
                    a = parseFloat(number1);
                    b = parseFloat(number2);
                    number2 = calculate(a,b,operator);
                    number1 = '';
                    operator = '';
                }


            }
            if(number1 != 0){
                document.getElementById('input').innerHTML = number1;
            }else{
                document.getElementById('input').innerHTML = '';
            }
            if(number2 != 0){
                document.getElementById('output').innerHTML = number2+ " " + operator;
            }else{
                document.getElementById('output').innerHTML = '';
            }


        }



    });

});

function checkWelcome(){
    if(document.getElementById('output').innerHTML == "Welcome"){
        document.getElementById('output').innerHTML = "";
    }
}