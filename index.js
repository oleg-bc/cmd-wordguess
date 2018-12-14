var Word = require("./Word.js");
var inquirer = require('inquirer');
var possibleWordsToGuess = ["one", "two", "three", "excess", "success", "exceed"];
var word;
var guesses;
var targetWord = possibleWordsToGuess[Math.floor(Math.random() * possibleWordsToGuess.length)];
console.log("targetWord is " + targetWord);
Word.LettersArray = targetWord.split("");
word = new Word (targetWord);
//pick a new letter word -later
//remove a picked word -later
guesses = targetWord.length + 3;
console.log(Word.lettersArray);
inquirer
    .prompt([{
        type: "input",
        message: "Guess a letter",
        name: "letterGuessed"
    }
    ])
    .then(function (answers) {// Use user feedback for... whatever!!
        console.log
            (answers.letterGuessed);

        var theLetter = answers.letterGuessed;

        word.processGuess(theLetter);
        guesses--;
    });
function nextPrompts() {
    console.log(Word.lettersArray);
    inquirer
        .prompt([{
            type: "input",
            message: "Guess a letter",
            name: "letterGuessed"
        }
        ])
        .then(function (answers) {
            console.log
                (answers.letterGuessed);
            var theLetter = answers.letterGuessed;
            Word.processGuess(theLetter);
            guesses--;

        });
}

