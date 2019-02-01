// comments with a //
/*
block-line
comments
like this
 */

// create an algorithm (in JavaScript we call these methods or functions)
// algorithm, method, and function are synonymous here.

// create your first function in JavaScript
function addNumbers (p1, p2) { // addNumbers is the name of the function
                              // p1 and p2 are the parameters of function addNumbers.
                              // they are the numbers that the computer expects to work with
    return p1 + p2;
}

function multiplyNumbers (p1, p2) {
    return p1 * p2;
}
function mathOps (num1, num2) {
    // create local variables that ONLY mathOps can see or use
    var sum = addNumbers(num1, num2);
    var product = multiplyNumbers(num1, num2);
    return sum + product;
}