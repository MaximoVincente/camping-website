function getName(){
    
    let answer = "california" 

    let state;
    while (state !== answer){
        state = prompt("Hello Explorer! Do you know which state has the most National Parks?");
    }
    if (state == answer){
   let user = prompt("Correct! You must be quite the explorer! What is your name?");
       document.write("Welcome " + user + " !");
    }
}

function takePicture(){

    let image = prompt("How many arches do you rate this site? ");
    for(let i = 1; i <= image; i++){
    document.write("<img src='arch.png' alt='arches' />");
    }
}

function getPark(){
    let name = document.querySelector('#name').value;
    alert(name + ' is one of my favorites too!');
}

