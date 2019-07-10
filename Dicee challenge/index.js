var randomNumber1 = Math.floor(Math.random() * 5) + 1; //random nr from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // random image of dice
var randomImageSource = "images/" + randomDiceImage; //concat to get a random img from folder
var image1 = document.querySelectorAll("img")[0]; //selecting the image at index 0 (first img)
image1.setAttribute("src", randomImageSource); // change attribute content

//changing img2, with shorter code
var randomNumber2 = Math.floor(Math.random() * 5) + 1; //random nr from 1 to 6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //concat to get a random img from folder
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //selecting the image at index 0 (first img)

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} //If player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} //draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
}