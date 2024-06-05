#!/usr/bin/env node 
//This line is called shebang,ehich tells the operating system to run it with node.js file.

// Import the inquirer module ,which is command line interface for Node.js.
import inquirer from "inquirer"

// Declare a constant answer and assign it to the the result of inquirer.prompt function
const answer: {
    sentence: string,
} = await inquirer.prompt(
    [
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Phrase/sentence to count the word : "
    }
]
)
const words = answer.sentence.trim().split(" ")
// trim is a method of string that can Removes whitespace from both ends of a string.
// Divides a string into an array of substrings using a specified separator.

/*Now print the array of words to the console*/
console.log(words)
//Print the word count of given sentence to console
console.log(`Your total word of the given sentence is equlas to : ${words.length}`);


