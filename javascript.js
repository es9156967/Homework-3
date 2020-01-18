//generate random password
//using ES6 let and const//
function generate(){

    let random = document.getElementById("slider").value;

    const values ="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxy1234567890!@#$%^&*()_+";

    let password = "";

    //create loop to choose password charcters//

    for(var i=0; i < random; i++){
        password += values[Math.floor(Math.random() * (values.length - 1 ))];
    }

    //adding password to dsipay//
    document.getElementById("display").value = password

    //add password generated passwords//
    document.getElementById("last_numbers").innerHTML += password + "<br>"
    
}


document.getElementById("length").innerHTML = "Length: 50";


document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 0";
    }
}


function clipboard(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied");
}


document.getElementById("operation_button").addEventListener("click", generate());
