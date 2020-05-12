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

        // set currentCounter variable to the contents of "counter" or 0 if "counter" doesn't exist yet
        let currentCounter = localStorage.getItem("counter") || 0;
        localStorage.setItem("counter", ++currentCounter);
    }
}
function clearList() {
    if(confirm("This will clear your notes list. Are you sure?")) {
        let currentCounter = localStorage.removeItem("counter");
    } else {
        console.log("do not delete storage")
    }
}
