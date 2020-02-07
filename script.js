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
	function lengthValid() {
		console.log("User entered: " + userLength);
		if (isNaN(userLength)) {
			console.log("Invalid user entry");
			userLength = prompt(
				"Your entry must be a number. (please choose a number between 8 and 128)"
			);
			lengthValid();
		} else if (!Number.isInteger(parseFloat(userLength))) {
			console.log("Invalid user entry");
			userLength = prompt(
				"Your entry must be a whole number. (please choose a number between 8 and 128)"
			);
			lengthValid(userLength);
		} else if (userLength < 8 || userLength > 128) {
			console.log("Invalid user entry");
			userLength = prompt(
				"Your entry is too big or too small. (please choose a number between 8 and 128)"
			);
			lengthValid();
		}
		return userLength;
	}
	var passwordLength = lengthValid();
	console.log("Password length will be: " + passwordLength);

	// Confirm lowercase and set variable
	var lowercase = confirm("Would you like lowercase letters in your password?");
	console.log("lowercase: " + lowercase);

	// Confirm uppercase and set variable
	var uppercase = confirm("Would you like uppercase letters in your password?");
	console.log("uppercase: " + uppercase);

	// Confirm numbers and set variable
	var numbers = confirm("Would you like numbers in your password?");
	console.log("numbers: " + numbers);

	// Confirm special characters and set variable
	var special = confirm("Would you like special characters in your password?");
	console.log("special characters: " + special);

	// Create list of characters to select for password
	var charactersAvailable = "";

	if (lowercase) {
		charactersAvailable += "abcdefghijklmnopqrstuvwxyz";
	}
	if (uppercase) {
		charactersAvailable += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (numbers) {
		charactersAvailable += "1234567890";
	}
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

	// Create loop to pick each character of password until password is specified length
	var newPassword = "";

	for (i = 0; i < passwordLength; i++) {
		var nextCharacter = charactersAvailable.charAt(
			Math.floor(Math.random() * charactersAvailable.length)
		);
		newPassword += nextCharacter;
		console.log(newPassword);
	}

	// Return generated password
	return newPassword;
}
