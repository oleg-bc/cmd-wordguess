function Letter(letterBeingGuessed) {
    this.wasGuessed = false;
    this.guessedLetters = [];
    this.letterBeingGuessed = letterBeingGuessed;
    this.checkGuessDisplayChar = function () {
        if (this.wasGuessed) {
            stringUnderlyingChar = letterBeingGuessed;
            return letterBeingGuessed;
        }
        else {
            stringUnderlyingChar = "_";
            return letterBeingGuessed;
        }
    };
    this.checkGuessLogic = function (char) {
        if (char === letterBeingGuessed) {
            wasGuessed = true;
        }
        else {
            wasGuessed = false;
        }
        return wasGuessed;
    };
}
module.exports = Letter;
///test
//this.word = word;
    //var word = "success";

// var aLetter = new Letter("a");
// var sLetter = new Letter("s");


// var testLetter1="a";
// var testLetter2="s";
// var printMeOne=aLetter.checkGuessLogic(testLetter1);
// var printMeTwo=sLetter.checkGuessLogic(testLetter2);

// console.log(printMeOne);
// console.log(printMeTwo);

// console.log(aLetter.checkGuessDisplayChar(testLetter1));
// console.log(sLetter.checkGuessDisplayChar(testLetter2));
///test ends



//aLetter.word="success";
// var aLetter = "a";
// var sLetter = "s";