function generate(){

    let random = document.getElementById("idLength").value;

    const values ="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxy1234567890!@#$%^&*()_+";

    let password = "";

    //create loop to choose password charcters//

    for(var i = 0; i < random; i++){
        password += values[Math.floor(Math.random() * (values.length -1 ))];
    }

    console.log(password);

    //adding password to display//
    document.getElementById("display").value = password;

    //add password--generated passwords//
    document.getElementById("last_numbers").innerHTML += password + "<br>"
    
}

/* document.getElementById("length").innerHTML = "Length: 100";
 */

document.getElementById("idLength").oninput = function(){
    if (document.getElementById("idLength").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("idLength").value;
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