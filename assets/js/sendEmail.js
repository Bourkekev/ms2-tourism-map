function sendMail(notesForm){
    //get local stored list
    //let currentList = localStorage.getItem("listItem");
    let sendList = "<ul>";
    console.log(sendList + "currentlist" + currentList);
    if (currentList){
        sendList += currentList;
        sendList += "<ul>";
    }
    console.log(sendList);
    let templateParams = {
        "from_email": notesForm.email.value,
        //"notes_summary": notesForm.notessummary.value
        "notes_summary": sendList
    };
     
    emailjs.send('gmail', 'template_tourism_notes', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        return false;
}