// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for password length
  var length = parseInt(prompt('Enter desired password length between 10 and 64:'));

  // Validate user input
  while(isNaN(length) || length < 10 || length > 64) {
    alert('Password length must be a number between 10 and 64 chracters in length. Please try again.');
    length = parseInt(prompt('Enter desired password length between 10 and 64 characters:'));
  }

  // Confirm special characters
  var hasSpecialCharacters = confirm('Click OK to confirm including special characters in the password.');

  // Confirm numeric characters
  var hasNumericCharacters = confirm('Click OK to confirm including numeric characters in the password.');

  // Confirm lowercase characters
  var hasLowerCasedCharacters = confirm('Click OK to confirm including lowercase characters in the password.');

  // Confirm uppercase characters
  var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters in the password.');

  // Store user input in an object
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  }

  // Return the object
  return passwordOptions;
}

function getRandom(arr) {
  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  
  // Return the element at the random index
  return arr[randomIndex];
}

  
// Function for getting a random element from an array
  function getRandom(arr) {
  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  
  // Return the element at the random index
  return arr[randomIndex];
}


function generatePassword() {
 // Get password options
  var options = getPasswordOptions();

  // Variable to store password as it's being built
  var result = [];

  // Array to store types of characters to include in the password
  var possibleCharacters = [];

  // Array to contain at least one of each type of chosen character
  var guaranteedCharacters = [];

  // Add special characters to possibleCharacters array if option is checked
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Add numeric characters to possibleCharacters array if option is checked
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Add lowercase characters to possibleCharacters array if option is checked
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Add uppercase characters to possibleCharacters array if option is checked
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // For each character in the password, get a random character from possibleCharacters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character type
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Convert result into a string and return
  return result.join('');
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
alert('your password is ' + password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


