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
        //create li element
        let newItem = document.createElement("li");
        let newItemContent = document.createTextNode(newItemValue);
        newItem.appendChild(newItemContent);
        list.appendChild(newItem);
        //clear user input field
        userInput.value = "";
    }
}