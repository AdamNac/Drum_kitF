//alert("Helo this is js"); to verify js in liked

for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener('click',function (){
   
    //console.log(this.innerHTML); //this is the object of the button in that case, so here we will have the character


    switch(this.innerHTML){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;  
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log("no sound") 
    
    }

}); //no set of parathensize in function because ohterwise will be triggered event when event not triggered

}

document.addEventListener('keydown',function(event){ //passing event as a paramter will indicate the key pressed if event.key
   switch(event.key){
    case "w":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
    case "a":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
    case "s":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;  
    case "l":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
    default: console.log("no sound") 

}
});

