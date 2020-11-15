var generateBtn     = document.querySelector("#generate");        //refers to html btn id 

const lowercase   = "abcdefghijklmnopqrstuvwxyz"; //what lowercaseEl contains 
const uppercase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //what uppercaseEl contains 
const numbers     = "0123456789";                 //what numbersEl contains
const symbols     = "!@#$%^&*+={}[]()/?<>";       //what symbolsEl contains

//taking user inputs and passing them through generatePassword function
function generatePassword() {
  
  //taking user inputs and passing them through generatePassword function

  const passwordLength = document.querySelector("#passwordLength").value; //length chosed
  console.log(passwordLength);

  var includeLowercase = document.querySelector("#LowerCase").checked; //wants lowercase
  console.log(includeLowercase);

  var includeUppercase = document.querySelector("#UpperCase").checked; //wants uppercase
  console.log(includeUppercase);

  var includeNumbers = document.querySelector("#Numbers").checked; //wamts numbers
  console.log(includeNumbers);

  var includeSymbols = document.querySelector("#Symbols").checked; //wants symbols
  console.log(includeSymbols);
  
  var passwordText = document.querySelector("#password"); // where combined inputs will be displayed


  var password = ""; // characters pulled from lottery
  var poolString = ""; // lottery pool of random characters



    if (includeLowercase === true) {    // if checked, add lowercase items into lottery pool (poolString)
      poolString = poolString.concat(lowercase)
    } 
    
    if (includeUppercase === true) {   // if checked, add lowercase items into lottery pool (poolString)
      poolString = poolString.concat(uppercase)
    } 

    if (includeNumbers === true) {     // if checked, add lowercase items into lottery pool (poolString)
      poolString = poolString.concat(numbers)
    } 

    if (includeSymbols === true) {    // if checked, add lowercase items into lottery pool (poolString)
      poolString = poolString.concat(symbols)
    } 


  for (var i = 0; i < passwordLength; i++) { //loop, will run as many times as user's length input will stop once reaches user's password length
    
    var randomIndex = Math.floor(Math.random() * poolString.length); //random index within length
    var randomCharacter = poolString.charAt(randomIndex); //the chose character from randomIndex
    
    password = password.concat(randomCharacter); //password now has the chosen characters
  }

  passwordText.value = password; //rendering password to browser (you will see it in box)
 
  console.log(password); // rendered password shown in console
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

