function isANumber(value){
    return !(isNaN(value) || typeof value === "boolean");
}
function isANumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value !== null);
}
function multiply(value1, value2){
    if(isNumber(parsdeFloat(value1)) || isNaN(parseFloat(value2))
    {
        return false;
    } else {
        return parseFloat(value1) + parseFloat(value2);
    }
}
function getHighestNumber(value1, value2, value3){
    if(!isNumber(value1) || (!isNumber(value2) || !isNumber(value3));
    return false;
}
    return Math.max(value1, value2, value3);

function parseNumber(value){
    return parseFloat(value);
}
function increment(value) {
    if(!isNumber(parseFloat(value))) {
        return false;
    } else {
        return parseFloat(value) + 1;
    }
}
    function decrement(value) {
        if(!isNumber(parseFloat(value))) {
            return false;
        } else {
            return parseFloat(value) - 1;
        }
    }
    function square(value){
        if(!isNumber(value)){return false}
    return value * value;}
}
function sumOfSquares(value1, value2){
    if (!isNumber(value1)) || isNaN(parseFloat(value2)){return false}
    return (value ** 2) + (value2 ** 2);
}
function is Palindrome(value){
    return value.toLowerCase() === value.split("").reverse().join('').toLowerCase();
}