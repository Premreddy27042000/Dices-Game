var randomFunction1 = Math.floor(Math.random()*6 + 1);
console.log(randomFunction1);

var randomDices = "dice" + randomFunction1 + ".png";

var randomImages = "images/" + randomDices;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImages);


//document.querySelector("img")
//<img class=​"img1" src=​"images/​dice6.png">​
//document.querySelector("img").attributes
//NamedNodeMap {0: class, 1: src, class: class, src: src, length: 2}0: class1: srclength: 2class: classsrc: src__proto__: NamedNodeMap
//document.querySelector("img").getAttribute("src")
//"images/dice6.png"
//document.querySelector("img").setAttribute("src","images/dice4.png")


var randomFunction2 = Math.floor(Math.random()*6 + 1);

var randomImages2 = "images/dice"+randomFunction2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImages2);


if(randomFunction1 > randomFunction2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}

else if(randomFunction1 === randomFunction2){
    document.querySelectorAll("h1")[0].innerHTML = "Game Tied";
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Won";
}