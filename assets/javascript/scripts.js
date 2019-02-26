// Theme is Netflix Original TV Series

// Create an array that holds all of the computer's word options.
var computerChoices = [
    "buster", 
    "spot", 
    "reginald", 
    "daisy", 
    "rover", 
    "buddy", 
    "maggie", 
    "lucy" 
];

// Create variables for wins, current word guesses remaining, and letters guessed.
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var newGameButton = document.getElementById("new-game-button");
var guessCountBox = document.getElementById("custom-number-box");
var youWinText = document.getElementById("you-win-text");

// Create variable for dog image.
var dogImg = document.getElementById("dog-img");


// Create a guessCounter variable.
var guessCounter = 5;
guessesRemainingText.textContent = "Number of Guesses Remaining: " + guessCounter;


// Create lose condition.
function loseLife() {
    guessCounter -= 1;
    guessesRemainingText.textContent = guessCounter;
    // alert("You have " + guessCounter + " guesses remaining.");
    if (guessCounter < 1) {   
            newGame();
    } 
    
    if (guessCounter > 4) {
        guessCountBox.style.backgroundColor = "green";
    } else if (guessCounter > 2) {
        guessCountBox.style.backgroundColor = "goldenrod";
    } else {
        guessCountBox.style.backgroundColor = "red";
    }
};

// Create win function.
var winsCount = 0;
function winGame() {
    alert("You win!");
    winsCount += 1;
    winsText.textContent = "Wins: " + winsCount;
    newGame();
};


// When a new game is started by refreshing the page, clicking the new game button, or confirming a new game after ending one.

function newGame() {
    // Reset guessCounter to 5
    guessCounter = 6;
    guessesRemainingText.textContent = guessCounter;

    // Reset guessBox color to green
    guessCountBox.style.backgroundColor = "green";

    // Reset lettersGuessedText
    lettersGuessedText.textContent = "Letters Already Guessed: ";

    // Generate computer guess from computerChoices array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    // Swap in corresponding dog image, based on computer guess.
    if (computerGuess === "buster") {
        dogImg.src = "assets/images/buster.jpg";
    } else if (computerGuess === "spot") {
        dogImg.src = "assets/images/spot.jpg";
    } else if (computerGuess === "reginald") {
        dogImg.src = "assets/images/reginald.jpg";
    } else if (computerGuess === "daisy") {
        dogImg.src = "assets/images/daisy.jpg";
    } else if (computerGuess === "rover") {
        dogImg.src = "assets/images/rover.jpg";
    } else if (computerGuess === "buddy") {
        dogImg.src = "assets/images/buddy.jpg";
    } else if (computerGuess === "maggie") {
        dogImg.src = "assets/images/maggie.jpg";
    } else {
        dogImg.src = "assets/images/lucy.jpg";
    };


    // Convert computerGuess to an array of single characters.
    var guessChars = computerGuess.split('');
    console.log(guessChars);
    // currentWordText.textContent = guessChars;

    // Replace each string in array with an underscore...
    var underscoreChars = [];
    for (i = 0; i < guessChars.length; i++) {
        console.log(guessChars.length);
        if (guessChars[i] === " ") {
            underscoreChars[i] = "   |   ";
        } else {
            underscoreChars[i] = "_  ";
        }
    }

    // console.log(guessChars);
    console.log(underscoreChars);


    // Display on screen as a single string...
    currentWordText.textContent = underscoreChars.join(" ");
    console.log(guessChars);


    // Run this function when key is pressed and released.
    document.onkeyup = function (event) {
        // Determines which key was pressed and stores to variable.
        var userGuess = event.key;


        // Restrict user input to letters and spaces only.
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

            userGuess.toUpperCase();
            console.log(userGuess);

            // Search computerGuess to see if the userGuess is in the word at all.
            var charTester = computerGuess.search(userGuess);
            console.log(charTester);
            if (charTester === -1) {
                // alert("WRONG");
                lettersGuessedText.textContent += userGuess.toUpperCase() + "   ";
                loseLife();
            }

            // Loop through guessChars for userGuess
            for (i = 0; i < guessChars.length; i++) {
                // If userGuess is correct...
                if (userGuess === guessChars[i]) {
                    // Reveal corresponding letter in underscoreChars
                    underscoreChars[i] = userGuess.toUpperCase();
                    currentWordText.textContent = underscoreChars.join(" ");
                }
            }

            // Check for win...
            var winCheck = false;
            if (underscoreChars.indexOf("_  ") === -1) {
                winCheck = true;
                winGame();
            }
        }
    }
}
newGame();