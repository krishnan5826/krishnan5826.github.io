function calculate (expression) {
	//Operations supported:
	//Addition | Subtraction | Multiplication | Division | Exponent | Square root | Round | Decimals

	var ctr = 0;	// counter which tracks each iteration
	var len = expression.length;	// length of expression
	var var1 = "";	// tracks chr entered before the operator is entered
	var subtotal = 0;	// complete operand which keeps track of every calculation, comprising of two operands and one operator in the order typed by the user.
	var oper = "";	// operator
	var chr = "";	// holds one character of the expression for each iteration of the while loop
	var flagForChr = "false";	// flag to check if an operator is encountered

	// loop through the characters and ends when the expression ends
	while (ctr < len) {


		// using subtring to step through each character of the expression
		chr = expression.substr(ctr, 1);

		// if the character is a number or decimal...
		if (chr === '0' || chr === '1' || chr === '2' || chr === '3' || chr === '4' || chr === '5' || chr === '6' || chr === '7' || chr === '8' || chr === '9' || chr === '.') {
			// append chr to the value of var1
			if (flagForChr === "false") {
				var1 = var1 + chr;	// stores value of var1
			}
		}

		// if chr is an operator...
		if (chr === '+') {
			if (oper === '-'){
				subtotal = subtotal - Number(var1);

			}
			else if (oper === '*'){
				subtotal = subtotal * Number(var1);

			}
			else if (oper === '/'){
				subtotal = subtotal / Number(var1);

			}
			else if (oper === '^'){
				subtotal = Math.pow(subtotal, Number(var1));

			}

			else {

				subtotal = Number(subtotal) + Number(var1);

			}

			oper = chr;	// store the operator
			flagForChr = "false";	// set flag as false
			var1 = "";		// reset var1

		}

		else if (chr === '-') {

			if (oper === '+'){
				subtotal = subtotal + Number(var1);
				var1 = "";
			}

			if (oper === '-'){
				subtotal = subtotal - Number(var1);
				var1 = "";
			}

			if (oper === '*'){
				subtotal = subtotal * Number(var1);
				var1 = "";
			}

			if (oper === '/'){
				subtotal = subtotal / Number(var1);
				var1 = "";
			}

			if (oper === '^'){

				subtotal = Math.pow(subtotal, Number(var1));
				var1 = "";
			}

			if (subtotal == 0){
				subtotal = Number(var1);
			}
			else{
				subtotal = Number(subtotal) - Number(var1);
			}

			var1 = "";
			flagForChr = "false";
			oper = chr;

		}
		else if (chr === '*') {

			if (oper === '+'){
				subtotal = subtotal + Number(var1);
				var1 = "";
			}

			if (oper === '-'){
				subtotal = subtotal - Number(var1);
				var1 = "";
			}

			if (oper === '*'){
				subtotal = subtotal * Number(var1);
				var1 = "";
			}

			if (oper === '/'){
				subtotal = subtotal / Number(var1);
				var1 = "";
			}

			if (oper === '^'){
				subtotal = Math.pow(subtotal, Number(var1));
				var1 = "";
			}

			if (subtotal == 0){
				subtotal = Number(var1);
			}

			var1 = "";
			flagForChr = "false";
			oper = chr;

		}
		else if (chr === '/') {

			if (oper === '+'){
				subtotal = subtotal + Number(var1);
				var1 = "";
			}

			if (oper === '-'){
				subtotal = subtotal - Number(var1);
				var1 = "";
			}

			if (oper === '*'){
				subtotal = subtotal * Number(var1);
				var1 = "";
			}

			if (oper === '/'){
				subtotal = subtotal / Number(var1);
				var1 = "";
			}

			if (oper === '^'){

				subtotal = Math.pow(subtotal, Number(var1));
				var1 = "";
			}

			if (subtotal == 0){
				subtotal = Number(var1);
			}

			var1 = "";
			flagForChr = "false";
			oper = chr;

		}

		else if (chr === '^') {

			if (oper === '+'){

				subtotal = subtotal + Number(var1);

			}

			if (oper === '-'){
				subtotal = subtotal - Number(var1);
				var1 = "";
			}

			if (oper === '*'){
				subtotal = subtotal * Number(var1);
				var1 = "";
			}

			if (subtotal == 0){
				subtotal = Number(var1);
			}

			var1 = "";
			flagForChr = "false";
			oper = chr;

		}

		ctr++;	// increments ctr by one and iterates through the while loop until ctr is equal to the length of the expression


	}

	//encountered the last character
	if (ctr == len){
		if (oper == '+'){
		subtotal = subtotal + Number(var1);	// final value
		oper = "";
		return subtotal; // returns answer to calcWindow
		}
		if (oper == '-'){
		subtotal = subtotal - Number(var1);
		oper = "";
		return subtotal;
		}
		if (oper == '*'){
		subtotal = subtotal * Number(var1);
		oper = "";
		return subtotal;
		}
		if (oper == '/'){
		subtotal = subtotal / Number(var1);
		oper = "";
		return subtotal;
		}
		if (oper == '^'){
		subtotal = Math.pow(subtotal, Number(var1));
		oper = "";
		return subtotal;
		}
	}
	// error statement
	else {
		return "Error - please try again.";
	}
}


// got code for the following functions using the Math.js library and learned the syntax from w3schools

// sine
function sine (expression) {
	return Math.sin(expression);
}

// cosine
function cosine (expression) {
	return Math.cos(expression);
}

// tangent
function tangent (expression) {
	return Math.tan(expression);
}

// log
function logarithm (expression) {
	if (expression < 0) {
		return "Please enter a positive value.";
	}
	return Math.log(expression);
}

// rounding function
function round (expression) {
	if (Number(expression)){
	expression = Math.round(expression);
	return expression;
	}
	else{
		return "Expression is not a number";
	}
}

// abs value function
function abs (expression) {
  expression = Math.abs(expression);
  return expression;
}

//exponent function
function exponent(p1, p2) {

		return Math.pow(Number(p1), Number(p2));

 }

// square root function
function sqrt (expression) {
		if (expression < 0) {
			expression *= -1;
			var answer = Math.sqrt(expression);
			answer.toString();
			return answer + 'i';
		}
		else {
			expression = Math.sqrt(expression);
			return expression;
		}
		if (expression = ""){
			return "0";
		}
}

// backspace function
function backspace(expression) {
	var len = expression.length;
	newExpression = expression.substr(0,len-1); // use substr to capture last digit of expression, and removing it
	return newExpression;

}
