document.querySelector(".button1").addEventListener("click" , function(){

var randomNumber = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice" + randomNumber + ".png";

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomDiceImage);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2= "images/dice" +randomNumber2+ ".png";
var img2= document.querySelector(".img2").setAttribute("src" , randomDiceImage2);
//img2.setAttribute("src" , randomDiceImage2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    document.querySelector("h1").style.fontSize = "7rem";
}

else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector("h1").style.fontSize = "7rem";
}

else{
   document.querySelector("h1").innerHTML = "Draw!";

}

});
