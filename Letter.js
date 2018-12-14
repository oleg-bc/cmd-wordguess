function Letter(letterBeingGuessed){
    //q:1 should the letter get word as arg??
    //var stringUnderlyingChar, boolGuessed;
    
    this.wasGuessed = false;
    //this.word = word;
    //var word = "success";
    this.guessedLetters = [];  
    
    this.letterBeingGuessed=letterBeingGuessed;
    ///q:2  1st letter function -- reqmt reads like it should NOT accept an arg - is that correct???
    //q:3 can this work without word???
    this.checkGuessDisplayChar = function(){
        if (this.wasGuessed)
        { 
            stringUnderlyingChar=letterBeingGuessed;
            return letterBeingGuessed;
        }   
        else 
        {
            stringUnderlyingChar = "_";
            return letterBeingGuessed;
        }
        
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuessLogic = function(char){
        if (char===letterBeingGuessed){
        wasGuessed=true;
        }
        else{
            wasGuessed=false;
        }
        return wasGuessed;
        //check the target word array
        // if was guessedCorrectly bool to true
    };  
}
module.exports=Letter;
///test
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