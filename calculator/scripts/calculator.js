'use strict';
/**
 * core
 */
//sums to numbers with NaN-detection
function sum(a, b) {
    if (isNaN(a + b)) {
        return 'Invalid Calculation';
    }
    return a + b;
}

//returns the difference between two numbers with NaN-detection
function difference(a, b) {
    if (isNaN(a - b)) {
        return 'Invalid Calculation';
    }
    return a - b;
}

//returns the product of two numbers with NaN-detection
function product(a, b) {
    if (isNaN(a * b)) {
        return 'Invalid Calculation';
    }
    return a * b;
}

//returns the quotient of two numbers with NaN- and Infinite-detection
function quotient(a, b) {
    if (!isFinite(a / b) || (isNaN(a / b))) {
        return 'Invalid Calculation';
    }
    return a / b;
}

//handles the symbols for calculations
function calculate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
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
    if (document.getElementById('output').innerHTML === 'Welcome') {
        document.getElementById('output').innerHTML = '';
    }
}

window.addEventListener('load', function () {
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
                    input = calculate(output, input, operator);
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