// Assignment Code
let generateBtn = document.querySelector("#generate");

// Arrays
let chosenLength;
let chosenNumbers;
let chosenLowerCase;
let chosenUpperCase;
let chosenSpecialChar;

let numbers = ["0123456789"];
let specialChar = ["!@#$%^&*()-=+_?<>"];
let alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
let alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];


//Function to use all 
function generatePassword() {
  desiredLength();
  console.log(chosenLength);
  desiredUpper();
  console.log(chosenUpper);
  desiredNum();
  console.log(chosenNumbers);
  desiredspecialchar();
  console.log(chosenSpecialChar);
  desiredLower();
  console.log(chosenLowerCase);

  let characters = alphaLower;
  let password = "";
  if (chosenUpper && chosenNumbers && chosenSpecialChar && chosenLowerCase) {
    characters += alphaUpper + numbers + specialChar + alphaLower;
  } else if (chosenUpper && chosenNumbers) {
    characters += alphaUpper + numbers;
  } else if (chosenNumbers && chosenSpecialChar) {
    characters += numbers + specialChar;
  } else if (chosenUpper && chosenSpecialChar) {
    characters += alphaUpper + specialChar;
  } else if (chosenUpper) {
    characters += alphaUpper;
  } else if (chosenNumbers) {
    characters += numbers;
  } else if (chosenSpecialChar) {
    characters += specialChar;
  } else {
    characters === alphaLower;
  }


//Function to destermine legnth
function desiredLength() {
  chosenLength = prompt("How long would you like your password to be?");
  if (chosenLength < 8) {
    confirm("Password must be between 8 to 128 characters long");
    desiredLength();
  } else if (chosenLength > 128) {
    confirm("Password must be between 8 to 128 characters long");
    desiredLength();
  } else if (isNaN(chosenLength)) {
    confirm("Password must be between 8 to 128 characters long");
    desiredLength();
  }
  return chosenLength;
}

//Function to determine uppercase
function desiredUpper() {
  chosenUpper = prompt("Would you like to use uppercase letters?");
  chosenUpper = chosenUpper.toLowerCase();

  if (chosenUpper === null || chosenUpper === "") {
    confirm("Yes or No");
    desiredUpper();
  } else if (chosenUpper === "yes" || chosenUpper === "y") {
    chosenUpper = true;
    return chosenUpper;
  } else if (chosenUpper === "no" || chosenUpper === "n") {
    chosenUpper = false;
    return chosenUpper;
  } else {
    confirm("Yes or No");
    desiredUpper();
  }
  return chosenUpper;
}

//Function to determine numbers
function desiredNum() {
  chosenNumbers = prompt("Would you like to use numbers?")
  chosenNumbers = chosenNumbers.toLowerCase();

  if (chosenNumbers === null || chosenNumbers === "") {
    confirm("Yes or No");
    desiredNum();
  } else if (chosenNumbers === "yes" || chosenNumbers === "y") {
    chosenNumbers = true;
    return chosenNumbers;
  } else if (chosenNumbers === "no" || chosenNumbers === "n") {
    chosenNumbers = false;
    return chosenNumbers;
  } else {
    confirm("Yes or No");
    desiredNum();
  }
  return chosenNumbers;
}

// function to determine special characters
function desiredspecialchar() {
  chosenSpecialChar = prompt("Would you like to use special characters?")
  chosenSpecialChar = chosenSpecialChar.toLowerCase();

  if (chosenSpecialChar === null || chosenSpecialChar === "") {
    confirm("Yes or No");
    desiredspecialchar();
  } else if (chosenSpecialChar === "yes" || chosenSpecialChar === "y") {
    chosenSpecialChar = true;
    return chosenSpecialChar;
  } else if (chosenSpecialChar === "no" || chosenSpecialChar === "n") {
    chosenSpecialChar = false;
    return chosenSpecialChar;
  } else {
    confirm("Yes or No");
    desiredspecialchar();
  }
  return chosenSpecialChar;
}

// function to determine lowercase letters
function desiredLower() {
  chosenLowerCase = prompt("Would you like to use special characters?")
  chosenLowerCase = chosenLowerCase.toLowerCase();

  if (chosenLowerCase === null || chosenLowerCase === "") {
    confirm("Yes or No");
    desiredLower();
  } else if (chosenLowerCase === "yes" || chosenLowerCase === "y") {
    chosenLowerCase = true;
    return chosenLowerCase;
  } else if (chosenLowerCase === "no" || chosenLowerCase === "n") {
    chosenLowerCase = false;
    return chosenLowerCase;
  } else {
    confirm("Yes or No");
    desiredLower();
  }
  return chosenLowerCase;
}

// 
  for (let i = 0; i < chosenLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the password input
function writePassword() {
  let password1 = "";
  password1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password1;
}
//obtain help from forums in stackflow 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

