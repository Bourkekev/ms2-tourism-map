let submitButton = document.getElementById("submit-note");
let userInput = document.getElementById("note-input");
let list = document.getElementById("notes-list");

function addToLIst(){
    let newItemValue = document.getElementById("note-input").value;
    console.log(newItemValue);
    if(newItemValue == null || newItemValue == ""){
        console.log("Input is empty");
    }
    else {
        list.innerHTML = "<p>Item is " + newItemValue + "</p>";
        //clear user input field
        userInput.value = "";
    }
}