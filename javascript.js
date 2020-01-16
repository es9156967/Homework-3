//generate random password
function generate(){

    let complexity = document.getElementById("slider").value;

    let values ="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxy1234567890!@#$%^&*()_+";

    let password = "";

    //create loop to choose password charcters//

    for(var i=0; i <= complexity; i++){
        password= password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //adding password to dsipay//
    document.getElementById("display").value = password

    //add password generated passwords//
    document.getElementById("last_numbers").innerHTML += password + "<br>"
    
}


document.getElementById("length").innerHTML = "Length: 25";


document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}


function clipboard(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied");
}