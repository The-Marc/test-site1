var nameInput = document.getElementById("message");
nameInput.onkeyup = function() {
    document.getElementById("totalChars").innerHTML = "You have typed " +  nameInput.value.length + " characters."; // gets length of input and outputs it
}

var submit = document.getElementById("messageSubmit");
submit.onclick = function() {
    if (nameInput.value.length >= 256) {
        document.getElementById("errorOutput").innerHTML = "Error: You have entered too many characters.";
    }
    else {
        document.getElementById("errorOutput").innerHTML = "Submitted.";
        nameInput.value = "";
        document.getElementById("totalChars").innerHTML = "";
    }
}