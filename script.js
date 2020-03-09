// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetter = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbol = "!@#$%^&*()";

// Write password to the #password input
 

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 var passwordLength = prompt("How long would you like the password?");
  var specialChar = confirm("Would like Special Characters?");
  var lowerChar = confirm("Would like Lower Case Letters?");
  var upperChar = confirm("Would like Upper Case Letters?");
  var numberChar = confirm("Would like Numbers?");