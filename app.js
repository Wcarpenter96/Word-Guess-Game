var wordChoice = ["miles davis", "bill evans", "john coltrane", "duke ellington",
    "charlie parker", "dizzy gillespie", "herbie hancock", "thelonius monk",
    "billie holiday", "count basie", "ella fitzgerald", "wynton marsalis",
    "benny goodman", "chick corea", "chet baker", "art blakey",
    "oscar peterson", "ray charles", "frank sinatra", "stan getz",
    "louis armstrong", "buddy rich", "keith jarrett"];


var triesLeft = 10;
var correct = [];
var incorrect = [];
var gameOver = false;

PickWord(wordChoice);
FillBlank(correct);

document.querySelector('#instructions').innerHTML = "Press any key to begin...";


// User initializes letter
document.onkeydown = function (event) {

    PrintCorrect();
    document.querySelector('#instructions').innerHTML = "Guess a letter";
    document.onkeydown = function (event) {

        var letter = event.key;
        //check if letter is a letter (not number or other key)
        SearchWord(word, letter);
        if (SearchWord(word, letter) === false) {
            AddIncorrect(incorrect, letter);
        }
        PrintCorrect();
        PrintIncorrect();
        document.querySelector('#triesLeft').innerHTML = triesLeft + " tries left!";

        WonGameCheck();
        LostGameCheck();
    };
};



function PickWord(choices) {
    var randInt = Math.floor(Math.random() * 20);
    word = choices[randInt];
}
function FillBlank(arr) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            arr.push(" ");
        } else
            arr.push("_");
    }
}
function PrintCorrect() {
    var correctString = document.getElementById("correctGuess");
    correctString.innerHTML = correct.join("").toUpperCase();
}
function PrintIncorrect() {
    var incorrectString = document.getElementById("incorrectGuess");
    incorrectString.innerHTML = incorrect.join(" ").toUpperCase();
}
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
function AddIncorrect(search, guess) {
    if (search.indexOf(guess) > -1) {
        console.log("Already guessed!");
    } else {
        search.push(guess);
        triesLeft--;
        document.querySelector('#instructions').innerHTML = "Incorrect Guesses:";

    }
}
function WonGameCheck() {
    if (!(correct.indexOf("_") > -1)) {
        document.querySelector('#triesLeft').innerHTML = "";
        document.querySelector('#incorrectGuess').innerHTML = "";
        document.querySelector('#instructions').innerHTML = "You named that cat! Press any key to play again...";
        gameOver = true;
    }
}
function LostGameCheck() {
    if (triesLeft === 0) {
        document.querySelector('#triesLeft').innerHTML = "";
        document.querySelector('#incorrectGuess').innerHTML = "";
        document.querySelector('#instructions').innerHTML = `The cat was ${word.toUpperCase()}! Press any key to play again...`;
        gameOver = true;
    }
}






