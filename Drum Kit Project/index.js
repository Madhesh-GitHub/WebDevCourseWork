var len = document.querySelectorAll("button").length;

for (var i=0; i<len ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var innerHTML = this.innerHTML;
        makeSound(innerHTML);
        buttonAnimation(innerHTML);
        
    });
}

document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var sound = './sounds/tom-1.mp3';
            new Audio(sound).play();
            break;
        case "a":
            var sound = './sounds/tom-2.mp3';
            new Audio(sound).play();
            break;
        case "s":
            var sound = './sounds/tom-3.mp3';
            new Audio(sound).play();
            break;
        case "d":
            var sound = './sounds/tom-4.mp3';
            new Audio(sound).play();
            break;
        case "j":
            var sound = './sounds/tom-7.mp3';
            new Audio(sound).play();
            break;
        case "k":
            var sound = './sounds/tom-5.mp3';
            new Audio(sound).play();
            break;
        case "l":
            var sound = './sounds/tom-6.mp3';
            new Audio(sound).play();
            break;
        
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(myfunc, 100);
    function myfunc(){
        activeButton.classList.remove("pressed");
    }
}

