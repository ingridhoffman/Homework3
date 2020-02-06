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
	console.log("User password length: " + userLength);
	// Validate user input for password length
	var passwordLength = 0;

	function lengthValid(input) {
		if (isNaN(input)) {
			console.log("Invalid user entry");
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
		} else if (input < 8 || input > 128) {
			console.log("Invalid user entry");
			userLength = prompt("You must enter a number between 8 and 128");
			return 0;
		} else {
			return input;
		}
	}

	while (passwordLength === 0) {
		passwordLength = lengthValid(userLength);
		console.log("User password length: " + userLength);
	}
	console.log("Password length will be: " + passwordLength);

	// Confirm lowercase and sets variable
	var lowercase = confirm("Would you like lowercase letters in your password?");
	console.log("lowercase: " + lowercase);

	// Confirm uppercase and sets variable
	var uppercase = confirm("Would you like uppercase letters in your password?");
	console.log("uppercase: " + uppercase);

	// Confirm numbers and sets variable
	var numbers = confirm("Would you like numbers in your password?");
	console.log("numbers: " + numbers);

	// Confirm special characters and sets variable
	var special = confirm("Would you like special characters in your password?");
	console.log("special characters: " + special);

	// Create list of characters to select for password
	var charactersAvailable = "";
	console.log(charactersAvailable);

	if (lowercase) {
		charactersAvailable += "abcdefghijklmnopqrstuvwxyz";
	}

	if (uppercase) {
		charactersAvailable += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	if (numbers) {
		charactersAvailable += "1234567890";
	}

	// Special characters used from Password Special Characters list from OWASP.org
	if (special) {
		charactersAvailable += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
	}
	console.log(charactersAvailable);

	// Validate charactersAvailable is not empty
	if (charactersAvailable.length === 0) {
		alert(
			"You must use AT LEAST ONE of lowercase, uppercase, numbers, or special characters. Please start again."
		);
		console.log("No characters available to create password. Function ending.");
		return;
	}

	// Create loop to pick each character of password and concatenate onto previous characters
	var newPassword = "";
	console.log(newPassword);

	for (i = 0; i < passwordLength; i++) {
		var nextCharacter = charactersAvailable.charAt(
			Math.floor(Math.random() * charactersAvailable.length)
		);
		newPassword += nextCharacter;
		console.log(newPassword);
	}

	// Return generated password
}
