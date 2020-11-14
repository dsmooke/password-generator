var generateBtn     = document.querySelector("#generate");        //refers to html btn id 

const lengthEl = (document.querySelector("#passwordLength"));
const lowercaseEl = "abcdefghijklmnopqrstuvwxyz"; //what lowercaseEl contains 26 letters
const uppercaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //what uppercaseEl contains 26 letters
const numbersEl   = "0123456789";                 //what numbersEl contains 10 numbers
const symbolsEl   = "!@#$%^&*+={}[]()/?<>";       //what symbolsEl contains ~20 symbols

for (var i =0; i > 8, i <= 128; i++) {
  console.log(lengthEl);
  //want to use length and apply to all 
}

for (var i =0; i < 10; i++) {
  console.log(uppercaseEl[(Math.floor(Math.random()) * uppercaseEl.length)]);
}

for (var i =0; i < 10; i++) {
  console.log(lowercaseEl[(Math.floor(Math.random()) * lowercaseEl.length)]);
}

for (var i =0; i < 10; i++) {
  console.log(numbersEl[(Math.floor(Math.random()) * numbersEl.length)]);
}

for (var i =0; i < 10; i++) {
  console.log(symbolsEl[(Math.floor(Math.random()) * symbolsEl.length)]);
}


// Instructions: Write password to the #password input
function writePassword() { //what do you want to happen?
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Instructions: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

