let submitButton = document.getElementById("submit-note");
let userInput = document.getElementById("note-input");
let list = document.getElementById("notes-list");

function addToLIst(){
    let newItemValue = document.getElementById("note-input").value;
    console.log("add to list initiated");
    document.getElementById("notes-list").innerHTML = "<p>Item is " + newItemValue + "</p>";
}