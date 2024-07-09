var len = document.querySelectorAll(".drum").length;
//my addition = color change
function makeSound(innerKey){
    switch (innerKey) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            
            break;
            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                
                break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(innerKey)
{
    document.querySelector('.'+innerKey).classList.add("pressed");
    setTimeout(function (){document.querySelector('.'+innerKey).classList.remove("pressed");},100);
}


//for mouse events
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            var innerKey = this.innerHTML;
            makeSound(innerKey)
            buttonAnimation(innerKey);
        }
    );

    
}

//for keystrokes
document.addEventListener("keydown",
    function (event) {
        var innerKey = event.key;
        makeSound(innerKey); 
        buttonAnimation(innerKey);       
    });




function playSound() {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}


//     document.querySelectorAll(".drum")[i].addEventListener("click", playSound);

