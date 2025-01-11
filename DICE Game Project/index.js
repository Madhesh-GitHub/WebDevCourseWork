var randomNumber1 = Math.floor(((Math.random()*6))+1);
console.log(randomNumber1)

var image = document.getElementsByClassName("img1")[0];
var link = "./images/dice"+randomNumber1+".png"
image.setAttribute("src", link);


var randomNumber2 = Math.floor(((Math.random()*6))+1);
var image2 = document.getElementsByClassName("img2")[0];
var link2 = "./images/dice"+randomNumber2+".png"
image2.setAttribute("src", link2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}