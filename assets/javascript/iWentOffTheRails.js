// create an array or words

var words = ["sloth", "platypus", "kangaroo", "bearcat"]

//choose word randomly

var randomNumber = Math.floor(Math.random() * words.length);
var chooseWord = words[randomNumber];
	console.log (chooseWord);

var lettersInWord = chooseWord.split('');

	console.log (lettersInWord);

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

	console.log (keyword);


		//check if user guesses a right answer
function gettheletters(){

	//if right push to right array
		
		for (var j = 0; j < chooseWord.length; j++) {
			
			if(chooseWord.indexOf(keyword) > -1){

			} else if (keyword[j] === keycode) {
				rightLetter.push(keyword);
				document.getElementById("underScoresId").innerHTML = underScores.join("  ");
				document.getElementById("rightGuessId").innerHTML = rightLetter.join("  ");
				guessesLeft--;
			}  else {
		wrongLetter.push(keyword);
		document.getElementById("wrongGuessId").innerHTML = wrongLetter.join("  ");
		document.getElementById("numberOfGuessesId").innerHTML = guessesLeft;
		guessesLeft--;
		}
	  }

	}
	//if wrong push to wrong array 


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


