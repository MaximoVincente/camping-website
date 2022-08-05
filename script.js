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

// function take_Picture(){

//     let pictures = 0;
//     pictures = prompt("How many arches are in Arches National Park");
//     for (let i = 1; i <= pictures; i++){
//         img.src = "/Users/maximovincentemejia/projects/courses/code_102/camping-website/IMG_3951.png";
//         document.write("here is " + i + " pictures");
//     }
// }


