var diceImageNumber = Math.floor(Math.random() * 6) + 1; //1 to 6

var diceImage = "dice" + diceImageNumber + ".png"; //dice1.png to dice6.png

var diceImageSource = "./images/" + diceImage; //./images/dice1.png to ./images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImageSource);

var diceImageNumber2 = Math.floor(Math.random() * 6) + 1; //1 to 6

var diceImage2 = "dice" + diceImageNumber2 + ".png"; //dice1.png to dice6.png

var diceImageSource2 = "./images/" + diceImage2; //./images/dice1.png to ./images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageSource2);

if (diceImageNumber > diceImageNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
}
else if (diceImageNumber < diceImageNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
