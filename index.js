var Word = require("./Word.js");

var inquirer = require('inquirer');
var possibleWordsToGuess = ["one", "two", "three","excess","success","exceed"];

//var rand = myArray[Math.floor(Math.random() * myArray.length)];

var targetWord = possibleWordsToGuess[Math.floor(Math.random()*possibleWordsToGuess.length)];
console.log("targetWord is "+ targetWord);


inquirer
    .prompt([{
            type: "input",
            message: "Guess a letter",
            name: "letterGuessed"
        }
    ])
    .then( function(answers)  {
        // Use user feedback for... whatever!!
        console.log(answers.letterGuessed); ///pass it to func in word.js  which then sends it to letter.js....
        ///dont return from asynch funcs/promises b/c it nests promises...
    });

    // index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
//return letterGuessed;


     //.prompt([
    /* Pass your questions in here */

    // type: (String) Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
    // name: (String) The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
    // message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).
