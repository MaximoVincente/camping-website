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

function getPark(){
    let name = document.querySelector('#name').value;
    alert(name + ' is one of my favorites too!');
}