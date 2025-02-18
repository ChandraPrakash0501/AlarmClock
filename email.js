console.log("Mail JavaScript")
let senderName = document.getElementById("Name");
let senderSubject =   document.getElementById("Subject");
let senderEmail =   document.getElementById("Email");
let senderMsg =   document.getElementById("SenderMsg");
let submitButton = document.getElementById("SubmitButton");
let closeMsgBox = document.getElementById("CloseMsgBox");
let sendMsgBox = document.getElementById("sendMsgBox");
let errotext = document.getElementById("ErroTextBox");

submitButton.addEventListener ("click", ()=>{
    if(senderName.value =="")
    {
        errotext.value = "Name Can't be Empathy !";
        errotext.style.opacity = "1";
        errotext.style.color = "red";
        errotext.style.border = "2px solid red";
        senderName.focus();
    }
    else if(senderSubject.value == "")
    {
        errotext.value = "Subject Of Mail  Can't be Empathy !";
        errotext.style.opacity = "1";
        errotext.style.color = "red";
        errotext.style.border = "2px solid red";
        senderSubject.focus();
    }
    else if(senderEmail.value == "")
    {
        errotext.value = "Email Address Can't be Empathy !";
        errotext.style.opacity = "1";
        errotext.style.color = "red";
        errotext.style.border = "2px solid red";
        senderEmail.focus();
    }
    else if(senderMsg.value == "")
    {
        errotext.value = "Message Can't be Empathy !";
        errotext.style.opacity = "1";
        errotext.style.color = "red";
        errotext.style.border = "2px solid red";
        senderMsg.focus();

    }
    else{
        
            let parms = {
                 name: document.getElementById("Name").value,
                 subject:  document.getElementById("Subject").value,
                 email:  document.getElementById("Email").value,
                 message:  document.getElementById("SenderMsg").value
        
            };
            const serviceID = "service_kpyyke6";
            const templateID = "template_156ux4e";
            emailjs.send(serviceID,templateID,parms)
            .then((res) =>{
                document.getElementById("Name").value = "";
                document.getElementById("Subject").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("SenderMsg").value = "";
                sendMsgBox.style.display = "flex";
            })
            .catch( (err) => console.log(err));
           
    }
    setTimeout(() => {
        errotext.style.opacity = "0";

    }, 3000);
})

closeMsgBox.addEventListener("click", ()=>{
    sendMsgBox.style.display = "none";
    senderName.value = "";
    senderSubject.value = "";
    senderEmail.value = "";
    senderMsg.value = "";
    senderName.focus();

})