

var lowLetter = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890";
var symbol = "!@#$%^&*()";

function generate (length = 12);

var complete = lowLetter + upperCase + numbers + symbol;

var password ='';

for (var index = 0;index < length; length++){
        var character = Math.floor(Math.random() * complete.length);
        password += complete.substring(character,character + 1);
}

return password;

