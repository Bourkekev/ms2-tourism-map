function sendMail(notesForm){
    let templateParams = {
        "from_email": notesForm.email.value,
        "notes_summary": notesForm.notessummary.value
    };
     
    emailjs.send('gmail', 'template_tourism_notes', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        return false;
}