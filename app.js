var wordChoice = ["hello", "world"];
var triesLeft = 12;
var correct = [];
var incorrect = [];
var letter;

PickWord(wordChoice);
FillBlank(correct);

document.onkeydown = function (event) {
    letter = event.key;
    SearchWord(word, letter);
    if (SearchWord(word, letter) === false) {
        AddIncorrect(incorrect, letter);
    }
    document.querySelector('#letterGuess').innerHTML = letter;
    document.querySelector('#triesLeft').innerHTML = triesLeft;
    document.querySelector('#correctGuess').innerHTML = correct;
    document.querySelector('#incorrectGuess').innerHTML = incorrect;
    if (!(correct.indexOf("_") > -1)) {
        document.querySelector('#win').innerHTML = "YOU WON";
    }
    if (triesLeft === 0) {
        document.querySelector('#lose').innerHTML = "GAME OVER";
    }
};

function PickWord(choices) {
    var randInt = 1
    word = choices[randInt];
}
function FillBlank(arr) {
    for (let i = 0; i < word.length; i++) {
        arr.push("_")
    }
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
    }
}






