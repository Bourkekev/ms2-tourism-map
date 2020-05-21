function sendMail(notesForm){
    //get local stored list
    currentList = localStorage.getItem("listItem");
    console.log(typeof(currentList)+currentList);
    let sendList = "<ul>";
    console.log( "Current LIST: " + sendList + currentList);
    

    if (currentList){
        //remove buttons from lists. Got regex from this generator http://regex.larsolavtorvik.com/
        let currentListNoBtn = currentList.replace(/<button class="del-btn">X<\/button>/gi, '');
        sendList += currentListNoBtn;
        sendList += "</ul>";
    }
    console.log("LIST TO BE SENT: " + sendList);
    let templateParams = {
        "from_email": notesForm.email.value,
        "notes_summary": sendList
    };
    
    // debug : send list back to DOM
    // let debugEl = document.getElementById("note-send-debug");
    // if (sendList){
    //     debugEl.innerHTML = sendList;
    // }

    emailjs.send('gmail', 'template_tourism_notes', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    return false;
}