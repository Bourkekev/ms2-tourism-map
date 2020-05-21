function sendMail(notesForm){
    //get local stored list
    currentList = localStorage.getItem("listItem");
    let sendList = "<ul>";
    console.log( "Current LIST: " + sendList + currentList);
    if (currentList){
        sendList += currentList;
        sendList += "<ul>";
    }
    console.log("LIST TO BE SENT: " + sendList);
    let templateParams = {
        "from_email": notesForm.email.value,
        "notes_summary": sendList
    };
    
    // debug
    let debugEl = document.getElementById("note-send-debug");
    if (sendList){
        debugEl.innerHTML = sendList;
    }
    // emailjs.send('gmail', 'template_tourism_notes', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });
    return false;
}