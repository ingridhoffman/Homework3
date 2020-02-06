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
function generatePassword() {
	// Prompt for password length and set variable
	// Choose 8-128 characters
	var userLength = prompt(
		"How many characters would you like your password to be? (please choose a number between 8 and 128)"
	);

	// Validate user input
	var passwordLength = 0;
	console.log(passwordLength);

	function lengthValid(input) {
		if (isNaN(input)) {
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
			// verifying number is integer not working...
			//		} else if (!Number.isInteger(input)) {
			//			userLength = prompt("You must enter a whole number between 8 and 128");
			//			return 0;
		} else if (input < 8 || input > 128) {
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
		} else {
			return input;
		}
	}
	console.log(passwordLength);

	while (passwordLength === 0) {
		passwordLength = lengthValid(userLength);
		console.log(passwordLength);
	}
	console.log(passwordLength);

	// Confirm lowercase and set variable

	// Confirm uppercase and set variable

	// Confirm numbers and set variable

	// Confirm special characters and set variable

	// Create list of characters to select for password

	// Create loop to generate each character of password and concatenate onto previous characters

	// Return generated password
}
