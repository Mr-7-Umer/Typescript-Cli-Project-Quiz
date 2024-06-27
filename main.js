#! /usr/bin/env node
// Cli Quiz
import inquirer from "inquirer";
console.log("Welcome to Daily Quiz");
console.log("Each Question is of 10 Marks\n");
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: 'list',
        name: 'question1',
        message: '1.Which is the capital city of Pakistan?',
        choices: ["Karachi", "Islamabad", "Lahore", "Peshawar"]
    },
    {
        type: 'list',
        name: 'question2',
        message: '2.Which is the national language of Pakistan?',
        choices: ["Urdu", "Punjabi", "Sindhi", "Pashto"]
    },
    {
        type: 'list',
        name: 'question3',
        message: '3.In which year did Pakistan gain independence?',
        choices: ["1945", "1946", "1947", "1948"]
    },
    {
        type: 'list',
        name: 'question4',
        message: '4.Who is known as the founder of Pakistan?',
        choices: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam Muhammad Ali Jinnah", "Benazir Bhutto"]
    },
    {
        type: 'list',
        name: 'question5',
        message: '5.Which city is known as the "City of Lights" in Pakistan?',
        choices: ["Lahore", "Faisalabad", "Karachi", "Islamabad"]
    },
]);
//  Destruturing the questions
const { question1, question2, question3, question4, question5 } = userInput;
let correctOptions = ["Islamabad", "Urdu", 1947, "Quaid-e-Azam Muhammad Ali Jinnah", "Karachi"];
//Condition
if (question1 === "Islamabad")
    marks += 10;
if (question2 === "Urdu")
    marks += 10;
if (question3 === 1947)
    marks += 10;
if (question4 === "Quaid-e-Azam Muhammad Ali Jinnah")
    marks += 10;
if (question5 === "Karachi")
    marks += 10;
console.log(marks);
function myAnswers() {
    console.log(`\n correct Options:`, correctOptions);
    if (marks == 50) {
        console.log(`\nCongratulations! You got full ${marks} marks`);
    }
    else if (marks > 0) {
        console.log(`\nYou got ${marks} marks, out of 50`);
    }
    else {
        console.log(`\n Unfortunately! You got ${marks} marks, out of 50`);
    }
}
myAnswers();
