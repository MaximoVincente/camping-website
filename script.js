const username = prompt("What is your name?");
document.write("Hi "  + username + " Your adventure awaits! ");


    let q1 = prompt("Hello " + username +" Would you like to explore the uknown?");
    
    if (q1 == "yes" || q1 == "YES" || q1 == "Yes" || q1 == "y"){
        alert("Then get ready for your your greatest adventure yet!");
    }
    else{
        alert("hmm.. There's no way!Let me change your mind!");
    }
