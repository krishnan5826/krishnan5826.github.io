function calculate (expression) {
	//Operations supported:
	//Addition | Subtraction | Multiplication | Division | Exponent | Square root | Round | Decimals
	
	var ctr = 0;
	var len = expression.length;
	var var1 = "";
	var subtotal = 0;
	var oper = "";
	var chr = "";
	var flagForChr = "false";

	while (ctr < len) {
		
		chr = expression.substr(ctr, 1);
			
		if (chr === '0' || chr === '1' || chr === '2' || chr === '3' || chr === '4' || chr === '5' || chr === '6' || chr === '7' || chr === '8' || chr === '9' || chr === '.') {
			
			if (flagForChr === "false") {
				var1 = var1 + chr;
			}
		}
		
		if (chr === '+') {
			
			if (oper === '-'){
				subtotal = subtotal - Number(var1);
			
			}
			else if (oper === '*'){
				subtotal = subtotal * Number(var1);
			
			}
			else if (oper === '/'){
				if (Number(var1) != 0 ){
				subtotal = subtotal / Number(var1);
				}
				else {
					return "Cannot divide by zero";
				}
			
			}
			else if (oper === '^'){
				subtotal = Math.pow(subtotal, Number(var1));
				
			}
			
			else {

				subtotal = Number(subtotal) + Number(var1);
			
			}
			
			oper = chr;
			flagForChr = "false";
			var1 = "";
			
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
				if (Number(var1) != 0 ){
				subtotal = subtotal / Number(var1);
				}
				else {
					return "Cannot divide by zero";
				}
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
				if (Number(var1) != 0 ){
				subtotal = subtotal / Number(var1);
				}
				else {
					return "Cannot divide by zero";
				}
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
				if (Number(var1) != 0 ){
				subtotal = subtotal / Number(var1);
				}
				else {
					return "Cannot divide by zero";
				}
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
		
		ctr++;
		
	
	}
	
	//Last character
	if (ctr = len){
		if (oper == '+'){
		subtotal = subtotal + Number(var1);
		oper = "";
		return subtotal;
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
				if (Number(var1) != 0 ){
				subtotal = subtotal / Number(var1);
				}
				else {
					return "Cannot divide by zero";
				}
		oper = "";
		return subtotal;
		}
		if (oper == '^'){
		subtotal = Math.pow(subtotal, Number(var1));
		oper = "";
		return subtotal;
		}
	}
	
}

function round (expression) {
	if (Number(expression)){
	expression = Math.round(expression);
	return expression;
	}
	else{
		return "Expression is not a number";
	}
}

function abs (expression) {
		if (isNaN(expression)){
			errMsg = "Value " +expression +" is not a number";
			return errMsg
		}
		else {
			expression = Math.abs(expression);
			return expression;
		}
}

function exponent(p1, p2) {

		return Math.pow(Number(p1), Number(p2));
 
 }
	

function sqrt (expression) {
		if (isNaN(expression)){
			errMsg = "Value " +expression +" is not a number";
			return errMsg
		}
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

function backspace(expression) {
	var len = expression.length;
	if (isNaN(expression)){
		newExpression = expression.substring(1,1);
	}
	else {
	newExpression = expression.substring(0,len-1);
	}
	return newExpression;
	
}