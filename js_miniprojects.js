/*
Mini project 1:
task: write a function named temperatureBug that:
- takes 1 argument, a numeric temperature (ex: 70, 80, 100)
- return a season for that score. Either Winter, Spring, Summer, or Fall.
- Call that function for a few different arguments and log the results

HTML:
(*) add an input box to collect the numeric temperature
(*) add an input box to collect the unit for the temperature
(*) add a button to call the function temperatureBug
(*) add a place to display the output for function temperatureBug
(*) display image(s) to go along with the output
JavaScript:
(*) create function temperatureBug
(*) PULL the numeric temperature and unit from HTML and use it in function temperatureBug
(*) if-statements with units, converting the units into Fahrenheit
(*) if-statements with numeric temperatures
*/


// declarations of function temperature bug
function temperatureBug() {
    // var temperature is the temperature that the user entered in the html document
    var temperature = document.projectOne.inputOne.value;
    // var unit is the unit the user entered in the html document
    var unit = document.projectOne.inputTwo.value;
    /*
    converting units into default unit, Fahrenheit
    learned unit conversion from https://www.rapidtables.com/convert/temperature/how-kelvin-to-fahrenheit.html
    */
    if (unit == "celsius") {
      temperature = temperature * 1.8 + 32;
    }
    /* else if (temperature == "fahrenheit") {
      temperature = temperature;
    }
    else {
      temperature = temperature; // default unit is fahrenheit
    }
	*/
    // if temperature is above 100, then sweltering summer
    if (temperature > 140 && unit == "celsius") {
      temperature = Math.floor((temperature - 32)*5/9);
	    // code from stackoverflow to make not needed pics to disappear
		var image = document.getElementById('sweltering_summer').src="img/blank.JPG";
        var imageOne = document.getElementById('summer').src="img/blank.JPG";
        var imageTwo = document.getElementById('book').src="img/blank.JPG";
        var imageThree = document.getElementById('autumn').src="img/blank.JPG";
        var imageFour = document.getElementById('book').src="img/blank.JPG";
        var imageFive = document.getElementById('snowmen').src="img/blank.JPG";
        var imageSix = document.getElementById('spring').src="img/blank.JPG";
        var imageSeven = document.getElementById('winter').src="img/blank.JPG";
        var imageEight = document.getElementById('frigid_winter').src="img/blank.JPG";
		return "Hmm... this is extremely hot. Did you mean " + temperature + " degrees Fahrenheit?";
    }
    else if (temperature >= 141) {
      var image = document.getElementById('sweltering_summer').src="img/sweltering_summer.jpg";

		document.getElementById('sweltering_summer').style.display='inline';
		document.getElementById('summer').style.display='none';
		document.getElementById('book').style.display='none';
		document.getElementById('snowmen').style.display='none';
		document.getElementById('autumn').style.display='none';
		document.getElementById('spring').style.display='none';
		document.getElementById('frigid_winter').style.display='none';
		document.getElementById('winter').style.display='none';
		return "I don't know of a place this hot... do you?! And how is your device still functioning?!";
    }
    else if (temperature <= 140 && temperature >= 100) {
		var image = document.getElementById('sweltering_summer').src="img/sweltering_summer.jpg";

		document.getElementById('sweltering_summer').style.display='inline';
		document.getElementById('summer').style.display='none';
		document.getElementById('book').style.display='none';
		document.getElementById('snowmen').style.display='none';
		document.getElementById('autumn').style.display='none';
		document.getElementById('spring').style.display='none';
		document.getElementById('frigid_winter').style.display='none';
		document.getElementById('winter').style.display='none';
        return "It's a sweltering summer - it's not advisable to go outside!";
    }
    // if temperature is between 75 and 99, then summer
    else if (temperature <= 99 && temperature >= 75) {
      var image = document.getElementById('summer').src="img/summer.jpg";
	  var imageTwo = document.getElementById('book').src="img/book.jpg";
		document.getElementById('summer').style.display='inline';
		document.getElementById('book').style.display='inline';
		document.getElementById('sweltering_summer').style.display='none';
		document.getElementById('snowmen').style.display='none';
		document.getElementById('autumn').style.display='none';
		document.getElementById('spring').style.display='none';
		document.getElementById('frigid_winter').style.display='none';
		document.getElementById('winter').style.display='none';
        return "It's nice summer day - perfect for going to the beach, playing some soccer, or reading a book outside!";

    }
    // if temperature is between 40 and 74, then either spring or fall
    else if (temperature <= 74 && temperature >= 40) {
        /* learned the concept of generating random numbers from Codeacademy */
        var randomNumber = Math.floor(Math.random() * 2);
        // if randomNumber is 1, then fall
        if (randomNumber === 1) {
      var image = document.getElementById('autumn').src="img/autumn.jpg";

		document.getElementById('autumn').style.display='inline';
		document.getElementById('summer').style.display='none';
		document.getElementById('book').style.display='none';
		document.getElementById('snowmen').style.display='none';
		document.getElementById('sweltering_summer').style.display='none';
		document.getElementById('spring').style.display='none';
		document.getElementById('frigid_winter').style.display='none';
		document.getElementById('winter').style.display='none';

        return "It's a beautiful autumn day - the leaves are a beautiful color and are starting to fall!";
        }
        // if not, then spring
        else {
            var image = document.getElementById('spring').src="img/spring.jpg";

			document.getElementById('spring').style.display='inline';
			document.getElementById('summer').style.display='none';
			document.getElementById('book').style.display='none';
			document.getElementById('snowmen').style.display='none';
			document.getElementById('sweltering_summer').style.display='none';
			document.getElementById('autumn').style.display='none';
			document.getElementById('frigid_winter').style.display='none';
			document.getElementById('winter').style.display='none';
            return "It's an elegant spring day! The birds are chirping and the flowers are beginning to grow again.";
        }
    }
    // if temperature is between 10 and 39, then winter
    else if (temperature <= 39 && temperature >= 10) {
		var image = document.getElementById('winter').src="img/winter.jpg";
		var imageTwo = document.getElementById('snowmen').src="img/snowmen.jpg";
		document.getElementById('winter').style.display='inline';
		document.getElementById('snowmen').style.display='inline';
		document.getElementById('sweltering_summer').style.display='none';
		document.getElementById('summer').style.display='none';
		document.getElementById('autumn').style.display='none';
		document.getElementById('spring').style.display='none';
		document.getElementById('frigid_winter').style.display='none';
		document.getElementById('book').style.display='none';
        return "Bundle up - it's a wintry day today - but it's the perfect weather to make snowmen and snowangels!";
    }
    // if temperature is less than 9, then frigid winter
    else if (temperature >= -60 && temperature <= 9) {
            var image = document.getElementById('frigid_winter').src="img/frigid_winter.jpg";

			document.getElementById('frigid_winter').style.display='inline';
			document.getElementById('summer').style.display='none';
			document.getElementById('book').style.display='none';
			document.getElementById('snowmen').style.display='none';
			document.getElementById('sweltering_summer').style.display='none';
			document.getElementById('autumn').style.display='none';
			document.getElementById('spring').style.display='none';
			document.getElementById('winter').style.display='none';
        return "It's a frigid winter day outside - its advisable to not go outside.";
    }
    else if (temperature <= -61) {
            var image = document.getElementById('frigid_winter').src="img/frigid_winter.jpg";

			document.getElementById('frigid_winter').style.display='inline';
			document.getElementById('summer').style.display='none';
			document.getElementById('book').style.display='none';
			document.getElementById('snowmen').style.display='none';
			document.getElementById('sweltering_summer').style.display='none';
			document.getElementById('autumn').style.display='none';
			document.getElementById('spring').style.display='none';
			document.getElementById('winter').style.display='none';
		return "Brr... I am stumped - I don't know of a place this cold. How do you still have an Internet connection?!";


    }
    // error statement
    else {
        return "The input that you have entered is not valid. Please try again.";
    }
}
/* mini project 2
write a function named helloWorld that does the following:
- Takes two arguments: an activity (running, biking, swimming, walking), and a time
- Returns the number of calories burned based on the activity and the time
- Call the function for each of the supported activities and log the result to make sure that it works!

HTML:
(*) add two input boxes to collect the activity and time being used in the output
(*) add a button to call the function calorieCounter
(*) add a place to display the output for calorieCounter
JavaScript:
(*) create function calorieCounter
(*) PULL the input from HTML and use in function calorieCounter
(*) if-statements with activities
 */

// declaration of function calorieCounter
function calorieCounter () {
	var myList=document.getElementById("myList");
	var activity = myList.options[myList.selectedIndex].text;
	var time = document.projectTwo.inputTwo.value; // captures data from time input box
	var goal = 500; // found who many calories different activities burned with Google Search
  if (activity == "Choose an activity") {
    return "Please select an activity";
  }
    if (time < 0) {
		document.getElementById('thumbs_up').style.display='none';
		document.getElementById('clap').style.display='none';
        return "Please enter a positive value for time";
		// error statement; time must be +
    }
    if (time == 0) {
      return "Zero calories have been burned - start exercising!";
	  document.getElementById('thumbs_up').style.display='none';
	  document.getElementById('clap').style.display='none';	  // encouraging statement if calories burned = 0
    }
    // if activity is running...
    else if (activity == 'Running')
    {
        var runningCaloriesBurned = Math.floor(time * 10);
		if (runningCaloriesBurned < goal) {
			var difference = goal - runningCaloriesBurned;
			var message = " You are " + difference + " calories away from meeting your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('running').src="img/running.png";
      var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
			document.getElementById('thumbs_up').style.display='inline';
      document.getElementById('running').style.display="inline";
			document.getElementById('clap').style.display='none';
      document.getElementById('walking').style.display='none';
      document.getElementById('swimming').style.display='none';
      document.getElementById('biking').style.display='none';
			return "Nice job! You have burned " + runningCaloriesBurned + " calories." + message;
		}
		else if (runningCaloriesBurned == goal) {
		var message = " You have met your daily goal of 500 calories. Keep it up!";
    var image = document.getElementById('running').src="img/running.png";
		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
		document.getElementById('thumbs_up').style.display='inline';
		document.getElementById('clap').style.display='inline';
    document.getElementById('running').style.display='inline';
    document.getElementById('walking').style.display='none';
    document.getElementById('swimming').style.display='none';
    document.getElementById('biking').style.display='none';
		return "Great job! You have burned " + runningCaloriesBurned + " calories." + message;
		}
		else if (runningCaloriesBurned > goal) {
			var difference = runningCaloriesBurned - goal;
			var message = " You have exceeded your daily goal of 500 calories by " + difference + " calories. Keep it up!";
      var image = document.getElementById('running').src="img/running.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('running').style.display='inline';
      document.getElementById('walking').style.display='none';
      document.getElementById('swimming').style.display='none';
      document.getElementById('biking').style.display='none';
			return "Excellent job! You have burned " + runningCaloriesBurned + " calories." + message;
		}
	}
    // if activity is biking...
    else if (activity == 'Biking')
    {
        var bikingCaloriesBurned = Math.floor(time * (65/6));
		if (bikingCaloriesBurned < goal) {
			var difference = goal - bikingCaloriesBurned;
			var message = " You are " + difference + " calories away from meeting your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('biking').src="img/biking.png";
      var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
			document.getElementById('thumbs_up').style.display='inline';
      document.getElementById('biking').style.display="inline";
			document.getElementById('clap').style.display='none';
      document.getElementById('walking').style.display='none';
      document.getElementById('running').style.display='none';
      document.getElementById('swimming').style.display='none';
			return "Nice job! You have burned " + bikingCaloriesBurned + " calories." + message;
		}
		else if (bikingCaloriesBurned == goal) {
			var message = " You have met your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('biking').src="img/biking.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('biking').style.display='inline';
      document.getElementById('walking').style.display='none';
      document.getElementById('swimming').style.display='none';
      document.getElementById('running').style.display='none';
			return "Great job! You have burned " + bikingCaloriesBurned + " calories." + message;
		}
		else if (bikingCaloriesBurned > goal) {
			var difference = bikingCaloriesBurned - goal;
			var message = " You have exceeded your daily goal of 500 calories by " + difference + " calories. Keep it up!";
      var image = document.getElementById('biking').src="img/biking.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('biking').style.display='inline';
      document.getElementById('walking').style.display='none';
      document.getElementById('swimming').style.display='none';
      document.getElementById('running').style.display='none';
			return "Excellent job! You have burned " + bikingCaloriesBurned + " calories." + message;
		}
    }
    // if activity is swimming...
    else if (activity == 'Swimming')
    {
        var swimmingCaloriesBurned = Math.floor(time * (59/6));
		if (swimmingCaloriesBurned < goal) {
			var difference = goal - swimmingCaloriesBurned;
			var message = " You are " + difference + " calories away from meeting your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('swimming').src="img/swimming.png";
      var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
			document.getElementById('thumbs_up').style.display='inline';
      document.getElementById('swimming').style.display="inline";
			document.getElementById('clap').style.display='none';
      document.getElementById('walking').style.display='none';
      document.getElementById('running').style.display='none';
      document.getElementById('biking').style.display='none';
			return "Nice job! You have burned " + swimmingCaloriesBurned + " calories." + message;
		}
		else if (swimmingCaloriesBurned == goal) {
			var message = " You have met your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('swimming').src="img/swimming.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('swimming').style.display='inline';
      document.getElementById('walking').style.display='none';
      document.getElementById('biking').style.display='none';
      document.getElementById('running').style.display='none';
			return "Great job! You have burned " + swimmingCaloriesBurned + " calories." + message;
		}
		else if (swimmingCaloriesBurned > goal) {
			var difference = swimmingCaloriesBurned - goal;
			var message = " You have exceeded your daily goal of 500 calories by " + difference + " calories. Keep it up!";
      var image = document.getElementById('swimming').src="img/swimming.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('swimming').style.display='inline';
      document.getElementById('walking').style.display='none';
      document.getElementById('biking').style.display='none';
      document.getElementById('running').style.display='none';
			return "Excellent job! You have burned " + swimmingCaloriesBurned + " calories." + message;
		}
    }
    // if activity is walking...
    else if (activity == 'Walking')
    {
        var walkingCaloriesBurned = Math.floor(time * (6.5));
		if (walkingCaloriesBurned < goal) {
			var difference = goal - walkingCaloriesBurned;
			var message = " You are " + difference + " calories away from meeting your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('walking').src="img/walking.png";
      var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
			document.getElementById('thumbs_up').style.display='inline';
      document.getElementById('walking').style.display="inline";
			document.getElementById('clap').style.display='none';
      document.getElementById('running').style.display='none';
      document.getElementById('swimming').style.display='none';
      document.getElementById('biking').style.display='none';
			return "Nice job! You have burned " + walkingCaloriesBurned + " calories." + message;
		}
		else if (walkingCaloriesBurned == goal) {
			var message = " You have met your daily goal of 500 calories. Keep it up!";
      var image = document.getElementById('walking').src="img/walking.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('walking').style.display='inline';
      document.getElementById('swimming').style.display='none';
      document.getElementById('biking').style.display='none';
      document.getElementById('running').style.display='none';
			return "Great job! You have burned " + walkingCaloriesBurned + " calories." + message;
		}
		else if (walkingCaloriesBurned > goal) {
			var difference = walkingCaloriesBurned - goal;
			var message = " You have exceeded your daily goal of 500 calories by " + difference + " calories. Keep it up!";
      var image = document.getElementById('walking').src="img/walking.png";
  		var imageOne = document.getElementById('thumbs_up').src="img/thumbsUp.jpg";
  		var imageTwo = document.getElementById('clap').src="img/clapping.jfif";
  		document.getElementById('thumbs_up').style.display='inline';
  		document.getElementById('clap').style.display='inline';
      document.getElementById('walking').style.display='inline';
      document.getElementById('swimming').style.display='none';
      document.getElementById('biking').style.display='none';
      document.getElementById('running').style.display='none';
			return "Excellent job! You have burned " + walkingCaloriesBurned + " calories." + message;
		}
    }
    else
    {
        return 'Input is invalid. Please make sure that you have entered an accepted activity and try again.'; // error statement
        // error statement
    }
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

// declaration of function assignGrade
function assignGrade () {
    var grade = Math.floor(document.projectThree.inputOne.value); // collects input from grade input box
    var gpa = document.projectThree.inputTwo.value; // collects input from GPA? input box
    var honors = document.projectThree.inputThree.value; // collects input from Honors/AP? input box
    // if the user would like to calculate their gpa...
    if (gpa == "yes") {
      // if they want to calculate their gpa for honors classes...
      if (honors == "yes") {
        if (grade >= 97) {
            return 'A+ ; GPA is 4.5';
        }
        else if (grade >= 93 && grade <= 96) {
            return 'A ; GPA is 4.5';
        }
        else if (grade >= 90 && grade <= 92) {
            return 'A- ; GPA is 4.5';
        }
        else if (grade >= 87 && grade <= 89) {
            return 'B+ ; GPA is 3.5';
        }
        else if (grade >= 83 && grade <= 86) {
            return 'B ; GPA is 3.5';
        }
        else if (grade >= 80 && grade <= 82) {
            return 'B- ; GPA is 3.5';
        }
        else if (grade >= 77 && grade <= 79) {
            return 'C+ ; GPA is 2.5';
        }
        else if (grade >= 73 && grade <= 76) {
            return 'C ; GPA is 2.5';
        }
        else if (grade >= 70 && grade <= 72) {
            return 'C- ; GPA is 2.5';
        }
        else if (grade >= 67 && grade <= 69) {
            return 'D+ ; GPA is 1.5';
        }
        else if (grade >= 63 && grade <= 66) {
            return 'D ; GPA is 1.5';
        }
        else if (grade >= 60 && grade <= 62) {
            return 'D- ; GPA is 1.5';
        }
        else if (grade >= 57 && grade <= 59) {
            return 'F+ ; GPA is 0.5';
        }
        else if (grade >= 53 && grade <= 56) {
            return 'F ; GPA is 0.5';
        }
        else if (grade >= 0 && grade <= 52) {
            return 'F- ; GPA is 0.5';
        }
        else {
            return 'Invalid input';
        }
      }
      // or if the user wants to calculate an unweighted GPA
      else if (honors == "no") {
        if (grade >= 97) {
            return 'A+ ; GPA is 4.0';
        }
        else if (grade >= 93 && grade <= 96) {
            return 'A ; GPA is 4.0';
        }
        else if (grade >= 90 && grade <= 92) {
            return 'A- ; GPA is 4.0';
        }
        else if (grade >= 87 && grade <= 89) {
            return 'B+ ; GPA is 3.0';
        }
        else if (grade >= 83 && grade <= 86) {
            return 'B ; GPA is 3.0';
        }
        else if (grade >= 80 && grade <= 82) {
            return 'B- ; GPA is 3.0';
        }
        else if (grade >= 77 && grade <= 79) {
            return 'C+ ; GPA is 2.0';
        }
        else if (grade >= 73 && grade <= 76) {
            return 'C ; GPA is 2.0';
        }
        else if (grade >= 70 && grade <= 72) {
            return 'C- ; GPA is 2.0';
        }
        else if (grade >= 67 && grade <= 69) {
            return 'D+ ; GPA is 1.0';
        }
        else if (grade >= 63 && grade <= 66) {
            return 'D ; GPA is 1.0';
        }
        else if (grade >= 60 && grade <= 62) {
            return 'D- ; GPA is 1.0';
        }
        else if (grade >= 57 && grade <= 59) {
            return 'F+ ; GPA is 0.0';
        }
        else if (grade >= 53 && grade <= 56) {
            return 'F ; GPA is 0.0';
        }
        else if (grade >= 0 && grade <= 52) {
            return 'F- ; GPA is 0.0';
        }
        else {
            return 'Invalid input';
        }
      }

    }
    // if the user only wants the grade and not the GPA
    else if (gpa == "no") {
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
    else {
      return "Invalid input"; //
    }
}

// mini project four

function fromTwoToTen (originalNumber, base) {

    var originalNumber = document.toBaseTen.inputOne.value;
    if (originalNumber < 0) {
        return "Please enter a positive number";
    }
    if (originalNumber > Math.floor(originalNumber)) {
      return "No decimals!";
    }
    var base = Number(document.toBaseTen.inputTwo.value);
    var tenNumber = 0; // stores output
    var numberLength = originalNumber.toString().length; // converts num to a STRING, then counts the number of characters in the string
    // in this case, length of '1101' is 4

    while (numberLength > 0) {
        var denominator = Math.pow(10, (numberLength - 1)); // gets denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(originalNumber/denominator); // captures a 1 or a 0 to multiply by 2^numLength
        // above means that 1101/1000 = 1 .... 01/10 = 0 .... 1/1 = 1
        if (currentDigit >= 1.2) {
            return "Incorrect input - remember, only 1's and 0's!";
        }
        tenNumber = tenNumber + currentDigit*Math.pow(base, (numberLength-1));
        originalNumber = originalNumber % denominator;
        numberLength--;
    }
    return tenNumber;
}


function fromTenToTwo(originalNumber, newBase) {
    var originalNumber = document.fromBaseTen.inputOne.value;
    var newBase = Number(document.fromBaseTen.inputTwo.value);
    var newNumber = "";
    if (originalNumber < 0) {
        return "Please enter a positive number.";
    }
    if (originalNumber > Math.floor(originalNumber)) {
      return "No decimals!";
    }
    while (originalNumber > 0) {
        newNumber = (originalNumber % newBase) + newNumber;
        originalNumber = Math.floor(originalNumber/2);
    }
    return newNumber;
}

// convert a base ten number to a smaller base
function tenToSmall (number, destinationBase) {

    // this function is expecting a number in base 10
    // it will convert the number to to the value of 'base'

    var number = document.fromBaseTenToX.inputOne.value; // number to convert
    if (number < 0) {
        return "Please enter a positive number";
    }
    if (number > Math.floor(number)) {
      return "No decimals!";
    }
    var destinationBase = Number(document.fromBaseTenToX.inputTwo.value); // destination base
    if (destinationBase < 0 || destinationBase > 10) {
      return "Please enter a base value between 0 and 10.";
    }
    if (destinationBase==10) {
      return number;
    }
    var smallNum = "";
    while (number > 0) {
        smallNum = (number % destinationBase) + smallNum;
        number = Math.floor(number/2);
    }
    return smallNum;
}

// convert a small base number to base ten


function smallToTen (num, base) {

    /* var num = 1101; // 13
    var base = 2; // base of num
    */
    var num = document.toBaseXToTen.inputOne.value;
    if (num < 0) {
        return "Please enter a positive number";
    }
    if (num > Math.floor(num)) {
      return "No decimals!";
    }
    var base = Number(document.toBaseXToTen.inputTwo.value);
    if (base < 0 || base > 10) {
      return "Please enter a base value between 0 and 10.";
    }
    var tenNum = 0; // stores output
    var numLength = num.toString().length;

    while (numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base, (numLength-1));
        num = num % denominator;
        numLength--;
    }
    return tenNum;
}
function smallToTenRevised (num, base) {
  var num = document.baseXToY.inputOne.value;
  if (num < 0) {
      return "Please enter a positive number";
  }
  if (num > Math.floor(num)) {
    return "No decimals!";
  }
  var base = Number(document.baseXToY.inputTwo.value);
  if (base < 0 || base > 10) {
    return "Please enter a base value between 0 and 10.";
  }
  var tenNum = 0;
  var numLength = num.toString().length;
  while (numLength > 0) {
      var denominator = Math.pow(10, (numLength - 1));
      var currentDigit = Math.floor(num/denominator);
      tenNum = tenNum + currentDigit*Math.pow(base, (numLength-1));
      num = num % denominator;
      numLength--;
  }
  return tenNum;
}
function tenToSmallRevised (number, destinationBase) {
  var number; // number to convert
  if (number < 0) {
      return "Please enter a positive number";
  }
  if (number > Math.floor(number)) {
    return "No decimals!";
  }
  var destinationBase = Number(document.baseXToY.inputThree.value); // destination base
  if (destinationBase < 0 || destinationBase > 10) {
    return "Please enter a base value between 0 and 10.";
  }
  if (destinationBase==10) {
    return number;
  }
  var smallNum = ""; // stores the remainders - it is important that smallNum is a string
  while (number > 0) { // continues to loop until num is greater than 0
      smallNum = (number % destinationBase) + smallNum; // 5%3 = 2... % returns the remainder
      // sets up num for the next iteration of the loop
      number = Math.floor(number/2);
  }
  return smallNum;
}
function xToY () {
  originalNum = document.baseXToY.inputOne.value;
  originalB = Number(document.baseXToY.inputTwo.value);
  changeOne = smallToTenRevised(originalNum, originalB);
  newB = Number(document.baseXToY.inputThree.value);
  changeTwo = tenToSmallRevised(changeOne, newB);
  return changeTwo;
}

  /* This was my previous code: the problem was that the function smallToTen would still take input

  var originalNumber = document.baseXToY.inputOne.value;
  var baseX = document.baseXToY.inputTwo.value;
  var baseTen = smallToTen(originalNumber, baseX);
  return baseTen;
  */

  /* var num = document.baseXToY.inputOne.value;
  if (num < 0) {
      return "Please enter a positive number";
  }
  if (num > Math.floor(num)) {
    return "No decimals!";
  }
  var base = document.baseXToY.inputTwo.value;
  var tenNum = 0; // stores output
  var numLength = num.toString().length; // converts num to a STRING, then counts the number of characters in the string
                                     // in this case, length of '1101' is 4

  while (numLength > 0) {
      var denominator = Math.pow(10, (numLength - 1));
      var currentDigit = Math.floor(num/denominator);
      tenNum = tenNum + currentDigit*Math.pow(base, (numLength-1));
      num = num % denominator;
      numLength--;
  }
  var number = tenNum; // number to convert
  if (number < 0) {
      return "Please enter a positive number";
  }
  if (number > Math.floor(number)) {
    return "No decimals!";
  }
  var destinationBase = document.baseXToY.inputThree.value; // destination base
  var smallNum = ""; // stores the remainders - it is important that smallNum is a string
  while (number > 0) { // continues to loop until num is greater than 0
      smallNum = (number % destinationBase) + smallNum; // 5%3 = 2... % returns the remainder
      // sets up num for the next iteration of the loop
      number = Math.floor(number/2);

  }
  return smallNum;

}

/* function addNums(input1, input2)
{
    var sum = input1 + input2;
    return sum; // returns the value of 'sum' to wherever addNums() was called
}

function subtractNums(input1, input2)
{
    var difference = input1 - input2;
    return difference;
}

function combo(input1, input2)
{
    var temp1 = addNums(input1, input2);
    var temp2 = subtractNums(input1, input2);
    var temp3 = addNums(temp1, temp2);
}
*/
