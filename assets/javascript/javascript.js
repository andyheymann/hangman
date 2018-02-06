// create an array or words

var words = ["sloth", "kangaroo", "gnarwal", "platypus"]

//choose word randomly

var randomNumber = Math.floor(Math.random() * words.length);
var chooseWord = words[randomNumber];
	console.log (chooseWord);

var underScores = [];
var rightLetter = [];
var wrongLetter = [];
var guessedLetter = [];
var guessesLeft = 9;


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
	var matchingLetter = [];

		//check if user guesses a right answer
	for (i = 0; i < chooseWord.length; i++) {
			if (chooseWord[i] == keyword) {
			// Store index of each matching letter in temp array
				matchingLetter.push(i);
			}
		}
		if (matchingLetter.length) {

//if right push to right array
		rightLetter.push(keyword);

	for (i = 0; i < matchingLetter.length; i++) {
			underScores[matchingLetter[i]] = keyword;
	}
			document.getElementById("underScoresId").innerHTML = underScores.join("  ");
			document.getElementById("rightGuessId").innerHTML = rightLetter.join("  ");

	// check to see if the userguess matches the word
	if (underScores.join("") == chooseWord) {
		alert("you win");
	}
}
//if wrong push to wrong array 

	else {
	wrongLetter.push(keyword);

			guessesLeft--;
			document.getElementById("wrongGuessId").innerHTML = wrongLetter.join("  ");
			document.getElementById("numberOfGuessesId").innerHTML = guessesLeft;
			
				if (guessesLeft<1){
				alert ("game over")
				resetGame();
				}	
				
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
	document.getElementById("numberOfGuessesId").innerHTML = "9";
	guessesLeft = 9;


}






// number of guesses...  laterz