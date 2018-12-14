var Letter = require("./Letter.js");
var currentLetter;
currentLetter = new Letter();
function Word(stringArg) {
    var lettersArray = [];//req1
    this.stringWord = function () {
        var strWrd;
        for (var i = 0; i < lettersArray.length; i++) {
            console.log(i);
            lettersArray.length[i].Letter.checkGuessDisplayChar();
            strWrd = strWrd.conact(lettersArray[i]);
        }
        return strWrd;
        console.log(strWrd);
    }
    this.processGuess = function (charArg) {
        currentLetter.checkGuessLogic(charArg);        //if guessed right - call - letter.displayLetter

        currentLetter.checkGuessDisplayChar();//if guessed wrong  - call- letter.displayUnderscore
        //return targetWord;
    }

    //req 3 
    // this.takeChar = function(characterInput){
    //     Letter.checkTheGuess(characterInput);
}
//}
module.exports = Word;
//pseudocode

// this is a construct that builds the obj that will STORE an array of words from which 1 will be chose for the round

// function - that randomly selects a word from array and stores is in an objects property as "chosen word"

/*
{
    guessedWord : "chosen from generateWordfunc()",

    wordArray : "this is the word array that contains all the possible words from which to chose target..."

    generateWordfunc : math.random()...chooses word from word array and stores it in guessedWord property
}
    */


















