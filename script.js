// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatepwd(max) {
return Math.floor(Math.random()* Math.floor(max));
}

//arrays
let numbers = ["0123456789"];
let specialChar = ["!@#$%^&*()-=+_?<>"];
let alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
let alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let generatePassword = [];



// Write password to the #password input
function writePassword() {
  let password1 = "";

 
}
 
// legnth confirmtion
// must be between 8-123 characters
let chosenLength = prompt("How long will you like your password to be?");
console.log(chosenLength);



//lowercase confirmation
let chosenLower = confirm("Would you like to use lower case characters?");
console.log(chosenLower);

if(chosenLower){
  generatePassword = generatePassword.concat(alphaLower);
} else{
  alert("No lowercase letters will be used");
}
console.log(generatePassword);

//uppercase confirmation

let chosenUpper = confirm("Would you like to use upper case characters?");
console.log(chosenUpper);

if(chosenUpper){
  generatePassword = generatePassword.concat(alphaUpper);
} else{
  alert("No uppercase letters will be used");
}
console.log(generatePassword);
// Confirm: special characters

let chosenSpecial = confirm("Would you like to use special characters?");
console.log(chosenSpecial);

if(chosenSpecial){
  generatePassword = generatePassword.concat(specialChar);
} else{
  alert("No special characters will be used");
}
console.log(generatePassword);

// Confirm: numbers
let chosenNum = confirm("Would you like to use numbers?");
console.log(chosenNum);

if(chosenNum){
  generatePassword = generatePassword.concat(numbers);
} else{
  alert("No numbers will be used");
}
console.log(generatePassword);

function passwd(chosenLength, chosenSpecial){
for(let i = 0; i <chosenLength; i++){
password1 += generatePassword.concat(Math.floor(Math.random() * generatePassword.length));
}
console.log(password1);

let secondItem = alphaLower[writePassword(alphaLower.length)];
let passwordText = document.querySelector("#password");
passwordText.value = passwordResult
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

