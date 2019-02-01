// create some variables and EXPLORE DATA TYPES
var int1 = 5; // creates an INTEGER data type. This variable is considered GLOBAL
var firstName = "Tangotron"; // creates a STRING data type. This variable is also GLOBAL
var stringNum = "5"; // these variables are global because they are not declared in a function and can be called from anywhere

function printName () {
    return document.getElementById("output").innerHTML = firstName;
}

function printNameAndMessage () {
    var strMessage = "My dog's first name is: "; // local variable because it is stored inside of a function
    return document.getElementById("output").innerHTML = strMessage + firstName;
}

function printFirstLastName () {
    var lastName = "Awesomedoge";
    return document.getElementById("output").innerHTML = firstName + ' ' + lastName;
}

function addingInputs () {
    // create 2 local variables to pull info from HTML
    // Number(***) will convert to a NUMERIC data type
    var val1 = Number(document.getElementById("num1").value);
    var val2 = Number(document.getElementById("num2").value);

    return document.getElementById('results').innerHTML = val1+val2;
}