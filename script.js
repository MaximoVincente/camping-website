const username = prompt("What is your name?");
document.write("Hi "  + username + " Your adventure awaits! ");

function adventure(){
    let q1 = prompt("Would you like to explore the uknown?");
    
    if (q1 == "yes" || q1 == "YES" || q1 == "Yes"){
        alert("Then get ready for your your greates adventure yet!");
    }
    else{
        alert("hmm.. There's no way!Let me ask again");
    }
}

function wrong_answer(){
    let q2 = confirm("Would you like to explore the uknown?");

    if(q1){
        alert("I knew it! Get ready for your next adventure!");
    }else{
        alert("Then get ready to change your mind!");
    }
}