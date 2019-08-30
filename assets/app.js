var wordChoice = ["miles davis", "bill evans", "john coltrane", "duke ellington",
    "charlie parker", "dizzy gillespie", "herbie hancock", "thelonius monk",
    "billie holiday", "count basie", "ella fitzgerald", "wynton marsalis",
    "benny goodman", "chick corea", "chet baker", "art blakey",
    "oscar peterson", "ray charles", "frank sinatra", "stan getz",
    "louis armstrong", "buddy rich", "keith jarrett"];

document.querySelector('#instructions').innerHTML = "Press any key to begin...";

// User initializes game
document.onkeydown = function (event) {
    
    // Variables
    var gameOver = false;
    var triesLeft = 10;
    var correct = [];
    var incorrect = [];

    // Setup
    PickWord(wordChoice);
    console.log(`The cat is ${word}`);
    FillBlank(correct);
    PrintCorrect();
    document.querySelector('#instructions').innerHTML = "Guess a letter";

    // User guesses a letter
    document.onkeydown = function (event) {
        var letter = event.key;
        SearchWord(word, letter);
        if (SearchWord(word, letter) === false) {
            AddIncorrect(incorrect, letter);
        }
        PrintCorrect();
        PrintIncorrect();
        document.querySelector('#triesLeft').innerHTML = triesLeft + " tries left!";
        CheckGameOver();
        if(gameOver){
            document.onkeydown = function (event) {
            location.reload();
            }
        }
    }
    // Picks a random string from an array
    function PickWord(choices) {
        var randInt = Math.floor(Math.random() * 20);
        word = choices[randInt];
    }
    // Fills characters of an array with underscores
    function FillBlank(arr) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == " ") {
                arr.push(" ");
            } else
                arr.push("_");
        }
    }
    // Prints the letters that the user has guessed correctly in their respective spaces 
    function PrintCorrect() {
        var correctString = document.getElementById("correctGuess");
        correctString.innerHTML = correct.join("").toUpperCase();
    }
    // Prints the letters that the user has guessed incorrectly
    function PrintIncorrect() {
        var incorrectString = document.getElementById("incorrectGuess");
        incorrectString.innerHTML = incorrect.join(" ").toUpperCase();
    }
    // Searches a string for a character. 
    // If found, the character is pushed into the matching index in the correct array.
    function SearchWord(search, guess) {
        var isLetter = false;
        for (let i = 0; i < word.length; i++) {
            if (guess === search.charAt(i)) {
                correct[i] = guess;
                isLetter = true;
            }
        }
        return isLetter;
    }
    // If not already guessed, adds character to incorrect array and decrements triesLeft
    function AddIncorrect(search, guess) {
        if (search.indexOf(guess) > -1) {
            console.log("Already guessed!");
        } else {
            search.push(guess);
            triesLeft--;
            document.querySelector('#instructions').innerHTML = "Incorrect Guesses:";

        }
    }
    // Checks to see if the user has won or lost the game, and sends the result to UI
    function CheckGameOver() {
        if (!(correct.indexOf("_") > -1)) {
            document.querySelector('#triesLeft').innerHTML = "";
            document.querySelector('#incorrectGuess').innerHTML = "";
            document.querySelector('#instructions').innerHTML = "You named that cat! Press any key to play again...";
            gameOver = true;
        }

        if (triesLeft === 0) {
            document.querySelector('#triesLeft').innerHTML = "";
            document.querySelector('#incorrectGuess').innerHTML = "";
            document.querySelector('#instructions').innerHTML = `The cat was ${word.toUpperCase()}! Press any key to play again...`;
            gameOver = true;
        }
    }
};








