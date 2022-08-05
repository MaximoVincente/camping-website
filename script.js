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

    let image = document.getElementById('image');
    image = prompt("How many arches do you want");
    for(let i = 1; i <= 5; i++){
    let pic = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Vertical_shot_of_Delicate_Arch_%288225393117%29.jpg";
    image = pic;
}
}

function getPark(){
    let name = document.querySelector('#name').value;
    alert(name + ' is one of my favorites too!');
}




// let pictures = 0;
//     pictures = prompt("How many arches do you want");
//     for (let i = 1; i <= pictures; i++){
//         var image = document.createElement("pictures");
//         document.getElementById("pictures").src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Vertical_shot_of_Delicate_Arch_%288225393117%29.jpg"
//     }