// Word.js: Contains a constructor, 
// Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./Letter.js");
function Word() {
    var lettersArray = [];//req1
    
    function stringWord() {
        var strWrd;
        for (var i = 0; i < lettersArray.length; i++){
        console.log(i);

        lettersArray.length[i].Letter.checkGuessDisplayChar();

        strWrd = strWrd.conact(lettersArray[i]);
    }
    return strWrd;
    }
    //req 2
    function processGuess (charArg) {
        Letter.checkGuessLogic(charArg);
        //if guessed right - call - letter.displayLetter
        //if guessed wrong  - call- letter.displayUnderscore
        
        //return targetWord;

    }

    //req 3 
    function takeChar(characterInput){
        Letter.checkTheGuess(characterInput);
    }
}
module.exports=Word;
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


















