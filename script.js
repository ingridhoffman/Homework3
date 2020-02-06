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
	// Prompt for password length (8-128 characters) and set variable
	var userLength = prompt(
		"How many characters would you like your password to be? (please choose a number between 8 and 128)"
	);

	// Validate user input for password length
	var passwordLength = 0;

	function lengthValid(input) {
		if (isNaN(input)) {
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
		} else if (input < 8 || input > 128) {
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
		} else {
			return input;
		}
	}

	while (passwordLength === 0) {
		passwordLength = lengthValid(userLength);
	}

	// Confirm lowercase and sets variable
	var lowercase = confirm("Would you like lowercase letters in your password?");

	// Confirm uppercase and sets variable
	var uppercase = confirm("Would you like uppercase letters in your password?");

	// Confirm numbers and sets variable
	var numbers = confirm("Would you like numbers in your password?");

	// Confirm special characters and sets variable
	var special = confirm("Would you like special characters in your password?");

	// Create list of characters to select for password
	var charactersAvailable = "";
	console.log(charactersAvailable);

	if (lowercase) {
		charactersAvailable += "abcdefghijklmnopqrstuvwxyz";
	}
	console.log(charactersAvailable);

	if (uppercase) {
		charactersAvailable += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	console.log(charactersAvailable);

	if (numbers) {
		charactersAvailable += "1234567890";
	}
	console.log(charactersAvailable);

	// Special characters used from Password Special Characters list from OWASP.org
	if (special) {
		charactersAvailable += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
	}
	console.log(charactersAvailable);

	// Create loop to generate each character of password and concatenate onto previous characters

	// Return generated password
}
