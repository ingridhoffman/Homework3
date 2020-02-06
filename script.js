// Code provided:
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Code developed:
// Prompt for password length and set variable
// Choose 8-128 characters

// Prompt for lowercase and set variable

// Prompt for uppercase and set variable

// Prompt for numbers and set variable

// Prompt for special characters and set variable

// Create list of characters to select for password

// Create loop to generate each character of password and concatenate onto previous characters

// Return generated password
