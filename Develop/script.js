var generateBtn = document.querySelector("#generate");

  var generatePassword = function() {
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var specialCharacters = ["!@#$%^&*()"];
  var numbers = ["0123456789"];
  console.log("button has been pressed");
  var length = 15;
  var buttonpress = window.prompt("Please define number of characters (between 8-128) for your password")

  if (buttonpress > 128 || buttonpress < 8){
    window.alert("Please choose specified character amount")
    return generatePassword
  };

var uppercaseConfirm = window.prompt("Would you like password to contain uppercase characters?");
var lowercaseConfirm = window.prompt("Would you like password to include lowercase characters?");
var specialcharactersConfirm = window.prompt("Would you like password to include special characters?");
var numbersConfirm = window.prompt("Would you like password to include numbers:");

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page