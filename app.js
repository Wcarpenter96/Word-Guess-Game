var word = "hello";
var triesLeft = 12;
var correct = [];
var incorrect = [];
var letter = "r";

FillCorrect();


SearchWord(word, letter);
if (SearchWord(word, letter) === false) {
    AddIncorrect(incorrect, letter);
}

console.log(correct);
console.log(incorrect);
console.log(triesLeft);


function FillCorrect() {
    for (let i = 0; i < word.length; i++) {
        correct.push("_")
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
    if (search.length == 0) {
        search.push(guess);
        triesLeft--;
    } else {
        for (let i = 0; i < search.length; i++) {
            if (guess === search[i]) {
                console.log("Already guessed!");
            } else {
                search.push(guess);
                triesLeft--;
            }
        }
    }
}






