// Instructions: Assignment Code
var generateBtn     = document.querySelector("#generate");        //refers to html btn id 
var lengthEl        = document.querySelector("#passwordLength");  //refers to password length id
var lowercaseEl     = document.querySelector("#LowerCase");       //refers to html lowercase id
var uppercaseEl     = document.querySelector("#UpperCase");       //refers to html uppercase id
var numbersEl       = document.querySelector("#Numbers");         //refers to html numbers id
var symbolsEl       = document.querySelector("#Symbols");         //refers to html symbols id
var newPassword     = document.querySelector("#password");

const lowercaseEl = ["abcdefghijklmnopqrstuvwxyz"]; //what lowercaseEl contains
const uppercaseEl = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; //what uppercaseEl contains
const numbersEl   = ["0123456789"];                 //what numbersEl contains
const symbolsEl   = ["!@#$%^&*+={}[]()/?<>"];       //what symbolsEl contains

let criteria = [lengthEl, lowercaseEl, uppercaseEl, numbersEl, symbolsEl]; //criteria must be 




// Instructions: Write password to the #password input
function writePassword() { //what do you want to happen?
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Instructions: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

