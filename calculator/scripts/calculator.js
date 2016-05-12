/**
 * core
 */

//handles the symbols for calculations
function calculate(a,b,operation){
    switch(operation) {
        case "+": return sum(a,b);
            break;
        case "−": return difference(a,b);
            break;
        case "∗": return product(a,b);
            break;
        case "÷": return quotient(a,b);
            break;
        default:
            break;
    }
}

//sums to numbers with NaN-detection
function sum(a,b){
    if(isNaN(a+b)){
        return 'Invalid Calculation';
    }
    return a+b;
}

//returns the difference between two numbers with NaN-detection
function difference(a,b){
    if(isNaN(a-b)){
        return 'Invalid Calculation';
    }
    return a-b;
}

//returns the product of two numbers with NaN-detection
function product(a,b){
    if(isNaN(a*b)){
        return 'Invalid Calculation';
    }
    return a*b;
}

//returns the quotient of two numbers with NaN- and Infinite-detection
function quotient(a,b){
    if(!isFinite(a/b) | (isNaN(a/b))){
        return 'Invalid Calculation';
    }
    return a/b;
}

/**
 * UI
 */
window.addEventListener('load', function() {
    document.getElementById('output').innerHTML = "Welcome";
    //for calculations
    var input = '';
    var output = '';
    var operator = '';
    document.addEventListener('click', function(evnt) {
        //button pressed
        if(evnt.target.attributes.getNamedItem('class') != null){
            checkWelcome();

            //number pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'number') {
                console.log('pressed number');
                input += evnt.target.attributes.getNamedItem('value').nodeValue;
            }

            //operator pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'operator') {
                console.log('pressed operator');
                var id = evnt.target.attributes.getNamedItem('id').nodeValue;
                operator = document.getElementById(id).innerHTML;
                if(output == ''){
                    output = input;
                    input = '';
                }
            }

            //command pressed
            if (evnt.target.attributes.getNamedItem('class').nodeValue == 'command') {
                console.log('pressed command');
                var id = evnt.target.attributes.getNamedItem('id').nodeValue;
                var command = document.getElementById(id).innerHTML;

                //C-button pressed
                if(command == "C"){
                    input = '';
                    output = '';
                    operator = '';
                }else {
                    //equal-button pressed
                    var a, b;
                    a = parseFloat(output);
                    b = parseFloat(input);
                    input = calculate(a,b,operator);
                    output = '';
                    operator = '';
                }
            }

            //display the output
            document.getElementById('input').innerHTML = input;
            document.getElementById('output').innerHTML = output+ " " + operator;
        }
    });
});

//check the Welcome-HTML
function checkWelcome(){
    if(document.getElementById('output').innerHTML == "Welcome"){
        document.getElementById('output').innerHTML = "";
    }
}