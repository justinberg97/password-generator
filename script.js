var characterLength = 8;
var choiceArray = [];

var specialCharacterArray = ['!','@','#','$','%','^','&','*','(','>'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getUserPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;

} else {
  passwordTest.value = "";
}

}

function generatePassword() {

  var password = "";
  for(var i =0; i < characterLength; i++) {
    var randomIndex = Math.floor (Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getUserPrompts() {

choiceArray = [];
  
characterLength = parseInt(prompt("How many characters would you like the password to include? 8-128 characters"));
   if(isNaN(characterLength) || characterLength <8 || characterLength > 128) {
    alert("character must be a number descibed in the previous promt");
    return false;
   }
  
   if (confirm("would you like to add lowercase letters into your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
   }

   if (confirm("how about uppercase:")) {
    choiceArray = choiceArray.concat(upperCaseArray);
   }

   if (confirm("what about numbers:")) {
    choiceArray = choiceArray.concat(numberArray);
   }

   if (confirm("lastly, what about special character$?")) {
      choiceArray = choiceArray.concat(specialCharacterArray);

}

return true;

}