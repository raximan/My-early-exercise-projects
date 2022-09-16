

document.addEventListener("keydown",  makeSound)

function makeSound(a){
    console.log("you pressed")
    switch (a.key) {
        case "w":
            var sound1 =new Audio("sounds/crash.mp3")
            sound1.play()
            break;
        case "a":
            var sound2 =new Audio("sounds/kick.mp3")
            sound2.play()
                break;
        case "s":
            var sound3 =new Audio("sounds/snare.mp3")
            sound3.play()
                break;
        case "d":
            var sound4 =new Audio("sounds/tom-1.mp3")
            sound4.play()
                break;
        case "j":
            var sound5 =new Audio("sounds/tom-2.mp3")
            sound5.play()
                break;
        case "k":
            var sound6 =new Audio("sounds/tom-3.mp3")
            sound6.play()
                break;
        case "l":
            var sound7 =new Audio("sounds/tom-4.mp3")
            sound7.play()
                break;
                
    
        default:
            console.log("error")
            break;          
        }
        
}

for(i=0;document.querySelectorAll(".drum").length;i++){
    let id = document.querySelectorAll(".drum")[i].id;
    function playSound(){
        var audio_src="sounds/"+id+".mp3"   ;
        var sound= new Audio(audio_src);
        sound.play();
    }
    document.querySelectorAll(".drum")[i].style.backgroundImage="url('images/"+id+".png')"
    document.querySelectorAll(".drum")[i].addEventListener("click",playSound)
}

    
