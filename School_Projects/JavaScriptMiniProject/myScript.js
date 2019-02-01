/*
= vs == Notes:
comparison operators are symbols/math that let us compare 2 or more values
= symbol is an assignment operator, we use it to assign a value to a variable
    ex. var x = 5; sets x equal to 5

== symbol is a comparison operator; we use it to compare two values for equality
    ex. x == y; will return TRUE or FALSE depending on whether x and y hold equal values
 */

function wordMatch () {

    var str1 = "apple";
    var str2 = "Apple";

    // return str1 == str2; will return false since 'apple' does not equal 'Apple'

    // logic gate -- aka conditional statement -- boolean statement because result is always yes/no

    if (str1==str2) {   // meaning if the two strings are equal
        return "The two strings are EQUAL!";
    } else {
        return "Those strings are DIFFERENT!";
    }
}

/*
If statement notes:
if (x===y) {...} STRICT equal, there data type of x and y MUST be the SAME
if (x==y) {...} LOOSE - values must be the same but the data types may not
    JavaScript will attempt to convert the data type, but don't rely on it if it is possible
if (x!==y) {...} LOOSE not-equal, this will return TRUE or FALSE if the data type is not equal
if (x!=y) {...} Values are not equal (DATA TYPE is ignored)

x < y means that x is less than y
x > y means that x is greater than y
x >= y means that x is greater than or equal to y
x <= y means that x is less than or equal to y
 */

function strictEqual () {

    var x = 7; // data type is NUMERIC
    var y = 7; // data type is STRING

    if (x===y) {
        return "Both x and y have the same value and data type";
    }
    if (x==y) {
        return "Both x and y have the same value.";
    }
}

/*
MINI PROJECT 1
TASK:
write a function named 'greaterNum' that does the following:
    () takes two arguments (parameters), both of which are NUMBERS
    () return whichever number is greater
    () call that function two times with different number pairs, and log the output to make sure that it works
    () expected output: if parameters are 23 and 33, then "The greater number is 33."

    GAMEPLAN
        HTML:
        (*) add 2 input boxes to collect two numbers to compare
        (*) add a button to call the function
        (*) create a place for the output

        JavaScript:
        () function 'greaterNum' that uses if/then to compare numbers
 */
function greaterNum() {
    var num1 = Number(document.projectOne.inputOne.value);
    var num2 = Number(document.projectOne.inputTwo.value);
    if (num1 > num2) {
        return "The greater number is " + num1 + "!";
    }
    else if (num2 > num1) {
        return "The greater number is " + num2 + "!";
    }
    else {
        return "The numbers are equal!";
    }
}

/* mini project 2
write a function named helloWorld that does the following:
- Takes one argument, a language code, (examples 'en','es','de')
- Returns "Hello World!" for the language code given
- It should default to returning English "Hello World"
- Call the function for each of the supported languages and log the result to make sure that it works!

HTML:
(*) add an input box to collect the language code being used in the output
(*) add a button to call the function helloWorld
(*) add a place to display the output for 'Hello World'
JavaScript:
(*) create function helloWorld
(*) PULL the language code from HTML and use in function helloWorld
(*) if-statements with language codes
 */
function helloWorld () {
    var language = document.projectTwo.inputOne.value; // captures data from input box
    language = language.toLowerCase();
    // here comes the logic statements
    if (language == 'kr')
    {
        return '안녕 세상';
    }
    else if (language == 'ru')
    {
        return 'Привет мир';
    }
    else if (language == 'de')
    {
        return 'Hallo Welt';
    }
    else if (language == 'hi')
    {
        return 'नमस्ते दुनिया';
    }
    else if (language == 'pl')
    {
        return 'Witaj świecie';
    }
    else if (language == 'en')
    {
        return 'Hello World!';
    }
    else
    {
        return 'Hello World!'; // default value
    }
    // PEBCAK = problem exists between chair and keyboard
}

/*
Mini project 3:
task: write a function named assignedGrade that:
- takes one argument, a numeric score (ex.: 70, 80, 100)
- return a grade for that score. Either A, B, C, D, or F.
- Call that function for a few different functions and log the results

HTML:
(*) add an input box to collect the numeric score
(*) add a button to call the function assignGrade
(*) add a place to display the output for function assignGrade
JavaScript:
(*) create function assignGrade
(*) PULL the numeric score from HTML and use it in function assignGrade
(*) if-statements with numeric grades
 */
function assignGrade () {
var grade = document.projectThree.inputOne.value;
if (grade >= 97) {
    return 'A+';
}
else if (grade >= 93 && grade <= 96) {
    return 'A';
}
else if (grade >= 90 && grade <= 92) {
    return 'A-';
}
else if (grade >= 87 && grade <= 89) {
    return 'B+';
}
else if (grade >= 83 && grade <= 86) {
    return 'B';
}
else if (grade >= 80 && grade <= 82) {
    return 'B-';
}
else if (grade >= 77 && grade <= 79) {
    return 'C+';
}
else if (grade >= 73 && grade <= 76) {
    return 'C';
}
else if (grade >= 70 && grade <= 72) {
    return 'C-';
}
else if (grade >= 67 && grade <= 69) {
    return 'D+';
}
else if (grade >= 63 && grade <= 66) {
    return 'D';
}
else if (grade >= 60 && grade <= 62) {
    return 'D-';
}
else if (grade >= 57 && grade <= 59) {
    return 'F+';
}
else if (grade >= 53 && grade <= 56) {
    return 'F';
}
else if (grade >= 0 && grade <= 52) {
    return 'F-';
}
else {
    return 'Invalid input';
}
}