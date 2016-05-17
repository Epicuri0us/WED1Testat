/**
 * core
 */
//sums to numbers with NaN-detection
function sum(a, b) {
    'use strict';
    if (isNaN(a + b)) {
        return 'Invalid Calculation';
    }
    return a + b;
}

//returns the difference between two numbers with NaN-detection
function difference(a, b) {
    'use strict';
    if (isNaN(a - b)) {
        return 'Invalid Calculation';
    }
    return a - b;
}

//returns the product of two numbers with NaN-detection
function product(a, b) {
    'use strict';
    if (isNaN(a * b)) {
        return 'Invalid Calculation';
    }
    return a * b;
}

//returns the quotient of two numbers with NaN- and Infinite-detection
function quotient(a, b) {
    'use strict';
    if (!isFinite(a / b) || (isNaN(a / b))) {
        return 'Invalid Calculation';
    }
    return a / b;
}

//handles the symbols for calculations
function calculate(a, b, operation) {
    'use strict';
    switch (operation) {
        case "+":
            return sum(a, b);
        case "−":
            return difference(a, b);
        case "∗":
            return product(a, b);
        case "÷":
            return quotient(a, b);
        default:
            return 'Invalid Calculation';
    }
}

/**
 * UI
 */
//check the Welcome-HTML
function checkWelcome() {
    'use strict';
    if (document.getElementById('output').innerHTML === 'Welcome') {
        document.getElementById('output').innerHTML = '';
    }
}

window.addEventListener('load', function () {
    'use strict';
    document.getElementById('output').innerHTML = 'Welcome';
    //for calculations
    var input = '';
    var output = '';
    var operator = '';
    document.addEventListener('click', function (evnt) {
        //button pressed
        if (evnt.target.attributes.getNamedItem('class') !== null) {
            checkWelcome();

            //number pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'number') {
                console.log('pressed number');
                input += evnt.target.attributes.getNamedItem('value').nodeValue;
            }

            //operator pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'operator') {
                console.log('pressed operator');
                var operatorid = evnt.target.attributes.getNamedItem('id').nodeValue;
                operator = document.getElementById(operatorid).innerHTML;
                if (output === '') {
                    output = input;
                    input = '';
                }
            }

            //command pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'command') {
                console.log('pressed command');
                var commandid = evnt.target.attributes.getNamedItem('id').nodeValue;
                var command = document.getElementById(commandid).innerHTML;

                //C-button pressed
                if (command === 'C') {
                    input = '';
                    output = '';
                    operator = '';
                } else {
                    //equal-button pressed
                    var a;
                    var b;
                    a = parseFloat(output);
                    b = parseFloat(input);
                    input = calculate(a, b, operator);
                    output = '';
                    operator = '';
                }
            }

            //display the output
            document.getElementById('input').innerHTML = input;
            document.getElementById('output').innerHTML = output + " " + operator;
        }
    });
});