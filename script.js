// Assignment Code
var generateBtn = document.querySelector("#generate");
var numIncluded;
var specialCharacterIncluded;
var uppercaseIncluded;
var lowercaseIncluded;
var charactersSelected = [];


// setting up the different charcter sets then spliting them to an array
var nums = '0123456789'.split(
  ''  
  );
var specialCharacters = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'.split(
  ''  
  );
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''  
  );
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(
''  
);


// Write password to the #password input
function writePassword() {
  function generatePassword(){
    // making the user input the amount of characters the password will be
    numAmount = prompt("How many Characters? Between 8 and 128");
    // checking that something was input
    if(!numAmount){
      alert("Requieres numeric value")
      // if the number is low or high then telling user to try again
    }else if (numAmount < 8 || numAmount > 128) {
       numAmount = prompt("Must be between 8 and 128");
    } else {
      // once an acceptable number is presented checks which list the user wants to pick from
      numIncluded = confirm("Will this contain numbers?");
      specialCharacterIncluded = confirm("Will this contain special characters?");
      uppercaseIncluded = confirm("Will this contain Uppercase letters?");
      lowercaseIncluded = confirm("Will this contain Lowercase letters?");
  };

  
  // tells user a character list must be selected  
  if(!numIncluded && !specialCharacterIncluded && !uppercaseIncluded && !lowercaseIncluded){
   choiceError = alert("You must choose a character type");
  }

  // adds a selected list to selected characters based upon user input
  if(numIncluded == true && specialCharacterIncluded == true && uppercaseIncluded == true && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(nums, specialCharacters ,upperCase ,lowerCase)
    console.log(charactersSelected,"allincluded")
  } else if (numIncluded == true && specialCharacterIncluded == true && uppercaseIncluded == true && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(nums, specialCharacters ,upperCase)
    console.log(charactersSelected,"nolowercase")
  } else if (numIncluded == true && specialCharacterIncluded == true && uppercaseIncluded == false && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(nums, specialCharacters ,lowerCase)
    console.log(charactersSelected,"noUpper")
  } else if (numIncluded == true && specialCharacterIncluded == false && uppercaseIncluded == true && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(nums, lowerCase ,upperCase)
    console.log(charactersSelected,"nospec")
  } else if (numIncluded == false && specialCharacterIncluded == true && uppercaseIncluded == true && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(lowerCase, specialCharacters ,upperCase)
    console.log(charactersSelected,"nonums")
  } else if (numIncluded == false && specialCharacterIncluded == false && uppercaseIncluded == true && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(lowerCase, upperCase)
    console.log(charactersSelected,"nonums or spec")
  } else if (numIncluded == false && specialCharacterIncluded == true && uppercaseIncluded == false && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(specialCharacters ,lowerCase)
    console.log(charactersSelected,"nonums or upper")
  } else if (numIncluded == false && specialCharacterIncluded == true && uppercaseIncluded == true && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(specialCharacters ,upperCase)
    console.log(charactersSelected,"nonums or lower")
  } else if (numIncluded == true && specialCharacterIncluded == false && uppercaseIncluded == false && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(nums ,lowerCase)
    console.log(charactersSelected,"no spec or upper")
  } else if (numIncluded == true && specialCharacterIncluded == false && uppercaseIncluded == true && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(nums ,upperCase)
    console.log(charactersSelected,"no spec or lower")
  } else if (numIncluded == true && specialCharacterIncluded == true && uppercaseIncluded == false && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(nums ,specialCharacters)
    console.log(charactersSelected,"no upper or lower")
  } else if (numIncluded == true && specialCharacterIncluded == false && uppercaseIncluded == false && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(nums )
    console.log(charactersSelected,"nums")
  } else if (numIncluded == false && specialCharacterIncluded == true && uppercaseIncluded == false && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(specialCharacters )
    console.log(charactersSelected,"specialCharacters")
  } else if (numIncluded == false && specialCharacterIncluded == false && uppercaseIncluded == true && lowercaseIncluded == false){
    charactersSelected = charactersSelected.concat(upperCase )
    console.log(charactersSelected,"upperCase")
  } else if (numIncluded == false && specialCharacterIncluded == false && uppercaseIncluded == false && lowercaseIncluded == true){
    charactersSelected = charactersSelected.concat(lowerCase )
    console.log(charactersSelected,"lowerCase")
  }



  // sets up an empty string
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < numAmount; i++) {
      var passwordCharacters = charactersSelected[Math.floor(Math.random() * charactersSelected.length)];
      password.push(passwordCharacters);
  }
  // This joins the password array and converts it to a string
  
  var truePassword = password.join("");

 // returns the password value
  return truePassword;
  }

// runs the password creation function
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;
  console.log(password.value)
}

// Add event listener to generate button and shows the password
generateBtn.addEventListener("click", writePassword);
