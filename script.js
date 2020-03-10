// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetter = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbol = "!@#$%^&*()";

// Write password to the #password input
 
var passwordLength = 0;
var passwordString = "";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



 passwordText.value = password;

}

function generatePassword(){
  
  var newPass = "";


  getPassword();
  passCriteria();

  for(var i = 0; i < passwordLength; i++){
    var j = Math.floor(Math.random() * passwordString.length);
    newPass += passwordString[j];
  }
  console.log(newPass);
  return newPass;
}

function getPassword(){
var passLength = prompt("How long would you like the password?");
passwordLength = parseInt(passLength);
console.log(passwordLength);


}

function passCriteria(){

var lowerChar = confirm("Would like Lower Case Letters?");
console.log(lowerChar)
var specialChar = confirm("Would like Special Characters?");
var upperChar = confirm("Would like Upper Case Letters?");
var numberChar = confirm("Would like Numbers?");

if (lowerChar){
  passwordString += lowLetter;
}
if(upperChar){
  passwordString += upperCase;
}
if(numberChar){
  passwordString += numbers;
}
if(specialChar){
  passwordString += symbol;
}
console.log(passwordString);

}

 