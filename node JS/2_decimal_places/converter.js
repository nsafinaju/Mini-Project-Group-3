// exports keyword 
// to make properties and methods available outside the module file
// include in index.js module

exports.two_decimal = function() {
    const num = 45.9589; 
    const two_decimal = num.toFixed(2); // .toFixed() method on the number to round a number 
    return "Two decimal places for number " + num + " is " + two_decimal;
};






