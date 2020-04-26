// Declaring random characters as variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!/#%$&*@+=-.:;{}";
var numbers = "1234567890";


//Split method is being used to turn a string into an array of substrings for each random character for the password 
var alphabetArr = alphabet.split("");
var capitalAlphabetArr = capitalAlphabet.split("");
var specialCharArr = specialChar.split("");
var numbersArr = numbers.split("");

//allows me to see if checkboxes are checked later
var specialCheckbox = document.querySelector(".special");
var numbersCheckbox = document.querySelector(".numbers");
var uppercaseCheckbox = document.querySelector(".uppercase");
var lowercaseCheckbox = document.querySelector(".lowercase");

// displaying slider value to the right
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

//grabs the value of the slider and stores it to the variable for usage
output.innerHTML = slider.value;

//each time slider is moved, the value will update 

slider.oninput = function(){
    output.textContent = slider.value;
}

function generatePassword() {
    var passwordLength = slider.value; 
    var password = "";
  
  
    //holds the selected character types
    var passwordType = [];
    console.log(passwordType);
    
    
    //checks to see which characters will be used and pushes those arrays into passwordType
    if (lowercaseCheckbox.checked == true) {
      passwordType.push(alphabetArr);
    }
    if (uppercaseCheckbox.checked == true) {
      passwordType.push(capitalAlphabetArr);
    }
    if (specialCheckbox.checked == true) {
      passwordType.push(specialCharArr)
    }
    if (numbersCheckbox.checked == true) {
      passwordType.push(numbersArr);
    }
    if (numbersCheckbox.checked == false && lowercaseCheckbox.checked == false && uppercaseCheckbox.checked == false && specialCheckbox.checked == false) {
      alert("please select at least one character type")
      return;
    }
    
    for (var passwordCounter = 0; passwordCounter < passwordLength; passwordCounter++) {
      //generating a index for each array
      var alphabetRandom = Math.floor(Math.random() * alphabetArr.length);
      var capitalAlphabetRandom = Math.floor(Math.random() * capitalAlphabetArr.length);
      var specialCharRandom = Math.floor(Math.random() * specialCharArr.length);
      var numberRandom = Math.floor(Math.random() * numbersArr.length);


      console.log(alphabetRandom);

      
      var passwordTypeRandom = Math.floor(Math.random() * passwordType.length)
      console.log(passwordTypeRandom);
  
      var nextCharType = passwordType[passwordTypeRandom];
      console.log(nextCharType);
      if (nextCharType === alphabetArr) {
        var nextChar = alphabet[alphabetRandom];
        console.log(nextChar);
      } else if (nextCharType === capitalAlphabetArr) {
        var nextChar = capitalAlphabet[capitalAlphabetRandom];
      } else if (nextCharType === specialCharArr) {
        var nextChar = specialCharArr[specialCharRandom];
      } else if (nextCharType === numbersArr) {
        var nextChar = numbersArr[numberRandom];
      }
  
      password = password + nextChar;
    }
  
    //prints password to user's screen
    document.querySelector("#password").textContent = password;
  }
  
  
  //calls function to generate password when generate-password is clicked
  var generate = document.querySelector(".generate-password");
  generate.addEventListener("click", generatePassword);
  
  
  function copyText () {
    var textToCopy = document.querySelector("#password");
    textToCopy.select();
    document.execCommand("copy");
    alert("password has been copied to clipboard");
  }
  
  var copy = document.querySelector(".clipboard-copy");
  copy.addEventListener("click", copyText);