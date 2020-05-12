let submitButton = document.getElementById("submit-note");
let userInput = document.getElementById("note-input");
let list = document.getElementById("notes-list");

// Simulate button click on enter
userInput.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      submitButton.click();
    }
  });

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
        while(list.hasChildNodes()){
            list.removeChild(list.childNodes[0]);
        }
    } else {
        console.log("do not delete storage")
    }
}
