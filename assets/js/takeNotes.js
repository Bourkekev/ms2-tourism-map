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

function addToList(){
    let newItemValue = document.getElementById("note-input").value;
    //check for required field message
    let requiredMsg = document.querySelector("#note-item-required");

    // if there is nothing in input
    if(newItemValue == null || newItemValue == ""){
        //if required field message is already there
        if(requiredMsg==null) {
            requiredMsg = document.createElement("div");
            requiredMsg.id="note-item-required";
            requiredMsg.innerText="The input is empty.";
            
            let reqWrapper = document.getElementById("note-input-wrapper");
            reqWrapper.appendChild(requiredMsg);
        }
    }
    else {
        //create li element
        let newItem = document.createElement("li");
        newItem.className="note-item";
        let newItemContent = document.createTextNode(newItemValue);
        // delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText="X";
        deleteBtn.className="del-btn";
        // Append text and elements inside li
        newItem.appendChild(newItemContent);
        newItem.appendChild(deleteBtn);
        list.appendChild(newItem);

        //clear user input field and remove required message
        userInput.value = "";
        if(requiredMsg) {
            requiredMsg.remove();
        }
        //save list in local storage
        localStorage.setItem("listItem", list.innerHTML);

    }
}
//Get stored list items if they exist on page load
let currentList = localStorage.getItem("listItem");
if (currentList){
    list.innerHTML = currentList;
}

//Delete individual item
document.querySelector('body').addEventListener('click', function(event) {
    if(event.target.className === 'del-btn') {
        //console.log(event.target.parentNode);
        //delete parent node(the li)
        event.target.parentNode.remove();
        //update the local storage with new list
        localStorage.setItem("listItem", list.innerHTML);
    }
});


function clearList() {
    if(confirm("This will clear your notes list. Are you sure?")) {
        let currentList = localStorage.removeItem("listItem");
        //remove first child nodes while there are some
        while(list.hasChildNodes()){
            list.removeChild(list.childNodes[0]);
        }
    } else {
        console.log("do not delete storage")
    }
}
