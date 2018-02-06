// create an array or words

var words = ["paris", "amsterdam", "london", "rome"]

//choose word randomly

var randomNumber = Math.floor(Math.random() * words.length);
var chooseWord = words[randomNumber];
	console.log (chooseWord);

var underScores = [];
var rightLetter = [];
var wrongLetter = [];
var guessedLetter = [];

var replaceUnderScore = document.getElementsByClassName("underScores");
var replaceRightGuess = document.getElementsByClassName("rightLetter");
var replaceWrongGuess = document.getElementsByClassName("wrongLetter");





//Create undersocres based on length of word

var generateUnderScores = () => {
	for (i = 0; i < chooseWord.length; i++){
		underScores.push("_");
		replaceUnderScore[0].innerHTML = underScores.join("");
		}
	return underScores;
}

// get the users guess - keypress event
document.addEventListener("keypress", (event) => {
	var keycode = event.keyCode;
	var keyword = String.fromCharCode(keycode);

	// ERIC: Rather than doing this:
		//check if user guesses a right answer
		if(chooseWord.indexOf(keyword) > -1){
	// ERIC: Try this:
	// FOR loop through word array and compare current letter to keyword val
	// Store index of each matching letter in temp array
	// Then
	// If temp array length > 0: Letter guessed was correct
	// Proceed with code below

//if right push to right array
	rightLetter.push(keyword);

	// ERIC: Rather than this:
	underScores[chooseWord.indexOf(keyword)] = keyword;
	// ERIC: Loop through temp array created above replacing each index with keyword val

			var element = document.getElementById("underScoresId");
			element.innerHTML = underScores.join("   ");

			var element = document.getElementById("rightGuessId");
			element.innerHTML = rightLetter.join("   ");

	// check to see if the userguess matches the word
	if (underScores.join("") == chooseWord) {
		alert("you win");
	}
}
//if wrong push to wrong array 

	else {
	wrongLetter.push(keyword);
			var element = document.getElementById("wrongGuessId");
			element.innerHTML = wrongLetter.join("   ");
	}
});

replaceUnderScore[0].innerHTML = generateUnderScores().join(" ")


function resetGame(){
   //replaces word
    randomNumber = Math.floor(Math.random() * words.length);
	chooseWord = words[randomNumber];
	console.log (chooseWord);

	//replaces correct and incorrect letters

	document.getElementById("rightGuessId").innerHTML = "_";
	document.getElementById("wrongGuessId").innerHTML = "_";
	rightLetter.splice(0,rightLetter.length);
	wrongLetter.splice(0,wrongLetter.length);


	//resets underscores
	underScores = [];
	replaceUnderScore[0].innerHTML = generateUnderScores().join(" ")
	replaceUnderScore = document.getElementsByClassName("underScores");


}






// number of guesses...  laterz