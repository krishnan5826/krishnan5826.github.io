function madlib () {
  var adjective1 = document.madlibs.adjective1.value.toUpperCase();
  var verb1 = document.madlibs.verb1.value.toUpperCase();
  var adjective2 = document.madlibs.adjective2.value.toUpperCase();
  var director1 = document.madlibs.director1.value.toUpperCase();
  var adjective3 = document.madlibs.adjective3.value.toUpperCase();
  var plural_noun1 = document.madlibs.plural_noun1.value.toUpperCase();
  var plural_noun2 = document.madlibs.plural_noun2.value.toUpperCase();
  var director2 = document.madlibs.director2.value.toUpperCase();
  var adverb = document.madlibs.adverb.value.toUpperCase();
  var verb2 = document.madlibs.verb2.value.toUpperCase();
  var country = document.madlibs.country.value.toUpperCase();
  var profession = document.madlibs.profession.value.toUpperCase();
  var verb3 = document.madlibs.verb3.value.toUpperCase();
  var singularNoun = document.madlibs.noun.value.toUpperCase();
  
  if (adjective1 === "" || verb1 === "" || adjective2 === "" || director1 === "" || adjective3 === "" || plural_noun1 === "" || plural_noun2 === "" || director2 === "" || adverb === "" || verb2 === "" || country === "" || profession === "" || verb3 === "" || singularNoun === "") {
	var errorMessage = "Please enter a value for all textboxes.";
	document.getElementById("error").innerHTML=errorMessage;
  }
 
  else {
	  var x = "";
	  document.getElementById("error").innerHTML = x;
  var madlib = [];

  madlib.push(adjective1);
  madlib.push(verb1);
  madlib.push(adjective2);
  madlib.push(director1);
  madlib.push(adjective3);
  madlib.push(plural_noun1);
  madlib.push(plural_noun2);
  madlib.push(director2);
  madlib.push(adverb);
  madlib.push(verb2);
  madlib.push(country);
  madlib.push(profession);
  madlib.push(verb3);
  madlib.push(singularNoun);
  if (madlib === [""]) {
	alert("Please enter values.");
  }
  //alert(madlib);
  /*for (var i = 0; i < madlib.length; i++) {
    alert(madlib[i]);
  }
  */
  /*var x = "4" + madlib[0];
  alert(x);
  */
  // learned how to use Math.random() from w3Schools.com
  var whichStory = Math.floor((Math.random() * 3) + 1);
  if (whichStory === 1) {
    var story1_part1 = "Hey, what do you think about that " + madlib[0] + " movie that we " + madlib[1] + " yesterday? Wasn't it " + madlib[2] + "?!";
    var story1_part2 = "The director, " + madlib[3] + ", did a(n) " + madlib[4] + " job! Those mutant " + madlib[5] + " gave me " + madlib[6] + "!";
    var story1_part3 = madlib[7] + " has got nothing on " + madlib[3] + "! I can " + madlib[8] + " wait for the sequel to come out - it's to " + madlib[9] + " for!";
    var story1 = story1_part1 + " " + story1_part2 + " " + story1_part3;
    //alert(story1);
    document.getElementById('madlib_output').innerHTML = story1;
  }

  else if (whichStory === 2) {
    var story2_part1 = "Hello screaming fans! In case you somehow don't know me, I'm Joe " + madlib[0] + ". I'm the most famous " + madlib[11];
    var story2_part2 = "in the whole of " + madlib[10] + "! I'm more famous than " + madlib[7] + " and " + madlib[3] + " combined!";
    var story2_part3 = "But I'm much more than a very rich and handsome " + madlib[11] + ". I " + madlib[1] + " my way to stardom, " + madlib[8];
    var story2_part4 = ", making myself known to " + madlib[10] + ". I'm just your normal guy trying to make a buck who is also the hero of all " + madlib[5];
    var story2_part5 = ". So before you write me off as just another self-absorbed celebrity (or " + madlib[9] + " and " + madlib[12] + " for my autograph, that works too),";
    var story2_part6 = "just remember - I'm just a normal guy deep inside - just one who is much " + madlib[2] + "er and " + madlib[4] + "er than you!";
    var story2 = story2_part1 + " " + story2_part2 + " " + story2_part3 + story2_part4 + " " + story2_part5 + " " + story2_part6;
    document.getElementById('madlib_output').innerHTML = story2;
  }

  else {
    var story3_part1 = "Today was probably the weirdest day of my life. When I woke up, I saw a(n) " + madlib[0] + " " + madlib[13] + " " + madlib[9];
    var story3_part2 = "ing at me! I " + madlib[1] + " out loud at the " + madlib[2] + " " + madlib[13] + " that was " + madlib[12] + "ing into my room.";
    var story3_part3 = "I was afraid for my life, thinking that this would be my last day alive as the " + madlib[4] + " " + madlib[13] + " " + madlib[1];
    var story3_part4 = " into my soul, edging closer and closer. But then the " + madlib[13] + " halted, closed its eyes, and slowly retreated out of my house. Then, I opened my eyes and found myself surrounded by " + madlib[6] + "! Oh no - what had I gotten myself into?!";
    var story3 = story3_part1 + story3_part2 + " " + story3_part3 + story3_part4;
    document.getElementById('madlib_output').innerHTML = story3;
  }
  }
  }
